'use client';
import Header from '@/components/Header';
import Greeting from '@/components/Greeting';
import TrendChart from '@/components/TrendChart/TrendChart';
import Container from '@/components/Container';
import { useEffect, useState } from 'react';
import { getAverageMoodLast5Days, getAverageSleepLast5Days } from './lib/utils';
import MoodAverageCard from '@/components/AverageCard/MoodAverageCard';
import SleepAverageCard from '@/components/AverageCard/SleepAverageCard';
import LogModal from '@/components/LogModal/LogModal';
import { useLogStore } from './store/logStore';

const HomePage = () => {
  const { logs, fetchLogs } = useLogStore();
  const [showLogModal, setShowLogModal] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        await fetchLogs();
      } catch (err) {
        console.error('Failed to load logs:', err);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Header />
      <main className="layout-grid px-200 pt-600 pb-1000 font-sans md:px-500 lg:gap-800">
        <Greeting className="area-greeting" onOpenLogModal={() => setShowLogModal(true)} />

        <Container as="section" className="area-cards">
          <MoodAverageCard
            value={logs.length > 0 ? getAverageMoodLast5Days(logs) : null}
            logs={logs}
          />
          <SleepAverageCard
            value={logs.length > 0 ? getAverageSleepLast5Days(logs) : null}
            logs={logs}
          />
        </Container>

        <TrendChart className="area-chart min-h-[420px]" logs={logs} />
        {showLogModal && <LogModal onClose={() => setShowLogModal(false)} />}
      </main>
    </>
  );
};

export default HomePage;
