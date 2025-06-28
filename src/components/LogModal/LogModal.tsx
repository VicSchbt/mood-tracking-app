import { useState } from 'react';
import { MoodValue } from '@/app/lib/moods';
import { SleepValue } from '@/app/lib/sleep';
import StepMood from './StepMood';
import StepFeelings from './StepFeelings';
import StepJournal from './StepJournal';
import StepSleep from './StepSleep';

interface LogFormData {
  mood: MoodValue | null;
  feelings: string[];
  journalEntry: string;
  sleep: SleepValue | null;
}

interface LogModalProps {
  onClose: () => void;
}

const LogModal = ({ onClose }: LogModalProps) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<LogFormData>({
    mood: null,
    feelings: [],
    journalEntry: '',
    sleep: null,
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const updateFormData = (updates: Partial<LogFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleSubmit = () => {
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-300 shadow-lg">
        <button
          className="absolute top-150 right-150 text-xl text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-200 text-lg font-semibold">Log your mood</h2>

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
            sleep={formData.sleep}
            onSelect={(sleep) => updateFormData({ sleep })}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default LogModal;
