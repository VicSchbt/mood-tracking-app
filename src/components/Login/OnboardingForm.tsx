import AvatarUpload from '../AvatarUpload';
import Button from '../Button/Button';

interface OnboardingFormProps {
  name: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const OnboardingForm = ({ name, onNameChange, onSubmit }: OnboardingFormProps) => (
  <form className="flex flex-col gap-400" onSubmit={onSubmit}>
    <div className="flex flex-col gap-100">
      <h1 className="preset-3 font-bold text-neutral-900">Personalize your experience</h1>
      <p className="preset-6 text-neutral-600">
        Add your name and a profile picture to make Mood yours.
      </p>
    </div>
    <div className="flex flex-col gap-100">
      <label htmlFor="name" className="preset-6 text-neutral-900">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Jane Appleseed"
        onChange={onNameChange}
        className="preset-6 rounded-10 bg-neutral-0 border border-neutral-300 px-200 py-100 py-150 text-neutral-900"
      />
    </div>
    <AvatarUpload />
    <Button className="w-full" label="Start Tracking" onClick={onSubmit} />
  </form>
);

export default OnboardingForm;
