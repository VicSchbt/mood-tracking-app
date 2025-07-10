import prisma from "../src/lib/prisma";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import path from "path";

interface MoodEntry {
  createdAt: string;
  mood: number;
  feelings?: string[];
  journalEntry?: string;
  sleepHours: number;
}

interface UserInput {
  email: string;
  password: string;
  name: string;
}

const importData = async () => {
  const filePath = path.join(__dirname, "data.json"); // or use .env for path
  const raw = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(raw);

  const user: UserInput = data.users[0];

  const existing = await prisma.user.findUnique({
    where: { email: user.email },
  });
  let userId: string;

  if (existing) {
    userId = existing.id;
    console.log("✅ User already exists, using:", user.email);
  } else {
    const hashed = await bcrypt.hash(user.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashed,
      },
    });
    userId = newUser.id;
    console.log("✅ Created new user:", newUser.email);
  }

  const logs: MoodEntry[] = data.moodEntries;

  for (const entry of logs) {
    const { createdAt, mood, feelings, journalEntry, sleepHours } = entry;

    await prisma.log.create({
      data: {
        createdAt: new Date(createdAt),
        mood,
        feelings,
        journal: journalEntry,
        sleepHours,
        userId,
      },
    });
  }

  console.log(`✅ Imported ${logs.length} mood logs for user ${user.email}`);
};

importData()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
