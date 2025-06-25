// src/app/page.tsx
import Header from '@/components/Header'
import Greeting from '@/components/Greeting'
import LogMoodButton from '@/components/LogMoodButton'
import AverageCard from '@/components/AverageCard'
import TrendChart from '@/components/TrendChart'
import Container from '@/components/Container'

export default function HomeEmptyPage() {
  return (
    <main className="min-h-screen bg-gradient-light font-sans">
      {/* <Header /> */}
      <div className="flex flex-col gap-600 px-200 items-center">
        <Greeting />
        <LogMoodButton />

        {/* <Container>
        <AverageCard type="mood" />
        <AverageCard type="sleep" />
        </Container>

        <TrendChart />  */}
      </div>
    </main>
  )
}
