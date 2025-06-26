// src/app/page.tsx
import Header from '@/components/Header'
import Greeting from '@/components/Greeting'
import LogMoodButton from '@/components/LogMoodButton'
import AverageCard from '@/components/AverageCard'
import TrendChart from '@/components/TrendChart'
import Container from '@/components/Container'

export default function HomeEmptyPage() {
  return (
    <main className="min-h-screen bg-gradient-light font-sans flex flex-col gap-600 px-200 items-center pb-1000">
      <Header />
        <Greeting />
        <LogMoodButton />

        <Container as="section">
        <AverageCard type="mood" />
        <AverageCard type="sleep" />
        </Container>

        <TrendChart /> 
    </main>
  )
}
