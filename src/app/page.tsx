'use client'
import Header from '@/components/Header'
import Greeting from '@/components/Greeting'
import TrendChart from '@/components/TrendChart'
import Container from '@/components/Container'
import { useEffect, useState } from 'react'
import { fetchMoods } from './lib/api'
import { MoodEntry } from '@/types'
import { getAverageMoodLast5Days } from './lib/utils'
import MoodAverageCard from '@/components/AverageCard/MoodAverageCard'

const HomePage = () => {
  const [moods, setMoods] = useState<MoodEntry[]>([])

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedMoods = await fetchMoods()
        setMoods(fetchedMoods)
        console.log('Fetched moods:', fetchedMoods)
      } catch (err) {
        console.error('Failed to load moods:', err)
      }
    }

    loadData()
  }, [])

  return (
    <>
      <Header />
      <main className=" font-sans px-200 md:px-500 pb-1000 pt-600 layout-grid lg:gap-800 ">
        
        <Greeting className="area-greeting" />

        <Container as="section" className="area-cards">
          <MoodAverageCard value={moods.length > 0 ? getAverageMoodLast5Days(moods) : null} moods={moods}/>
         
        </Container>

        <TrendChart className="area-chart" /> 
      </main>
    </>
  )
}

export default HomePage;
