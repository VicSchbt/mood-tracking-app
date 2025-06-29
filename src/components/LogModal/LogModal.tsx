import { useState } from 'react';
import StepMood from './StepMood';
import StepFeelings from './StepFeelings';
import StepJournal from './StepJournal';
import StepSleep from './StepSleep';
import Stepper from './Stepper';
import { LogFormData, submitLog } from '@/app/lib/api';
import { useLogStore } from '@/app/store/logStore';

interface LogModalProps {
  onClose: () => void;
}

const LogModal = ({ onClose }: LogModalProps) => {
  const { addLog } = useLogStore();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<LogFormData>({
    mood: null,
    feelings: [],
    journalEntry: '',
    sleepHours: null,
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const updateFormData = (updates: Partial<LogFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleSubmit = async () => {
    try {
      const result = await submitLog(formData);
      addLog(result);
      console.log('✅ Saved:', result);
      onClose();
    } catch (error) {
      console.error('❌ Submission failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-gradient-light relative flex w-full max-w-xl flex-col gap-300 rounded-2xl px-250 py-400 shadow-lg md:gap-400 md:px-500 md:py-600">
        <button
          className="absolute top-400 right-400 text-2xl text-neutral-300 hover:text-neutral-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="preset-2 font-bold text-neutral-900">Log your mood</h2>
        <Stepper current={step} />
        {/* Step content */}
        {step === 0 && (
          <StepMood
            mood={formData.mood}
            onSelect={(mood) => updateFormData({ mood })}
            onNext={handleNext}
          />
        )}
        {step === 1 && (
          <StepFeelings
            selected={formData.feelings}
            onChange={(feelings) => updateFormData({ feelings })}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 2 && (
          <StepJournal
            value={formData.journalEntry}
            onChange={(journalEntry) => updateFormData({ journalEntry })}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && (
          <StepSleep
            sleepHours={formData.sleepHours}
            onSelect={(sleepHours) => updateFormData({ sleepHours })}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default LogModal;
