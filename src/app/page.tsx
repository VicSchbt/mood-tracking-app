// src/app/page.tsx
import Header from '@/components/Header'
import Greeting from '@/components/Greeting'
import AverageCard from '@/components/AverageCard'
import TrendChart from '@/components/TrendChart'
import Container from '@/components/Container'

export default function HomeEmptyPage() {
  return (
    <>
      <Header />
      <main className=" font-sans px-200 md:px-500 pb-1000 pt-600 layout-grid lg:gap-800 ">
        
        <Greeting className="area-greeting" />

        <Container as="section" className="area-cards">
          <AverageCard type="mood" />
          <AverageCard type="sleep" />
        </Container>

        <TrendChart className="area-chart" /> 
      </main>
    </>
  )
}
