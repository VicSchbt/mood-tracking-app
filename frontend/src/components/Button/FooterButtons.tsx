import Button from './Button';

interface FooterButtonsProps {
  onBack: () => void;
  onNext: () => void;
  disabled?: boolean;
  nextLabel?: string;
}

const FooterButtons = ({
  onBack,
  onNext,
  disabled = false,
  nextLabel = 'Continue',
}: FooterButtonsProps) => {
  return (
    <div className="flex w-full flex-col gap-150 md:flex-row">
      <Button className="md:w-1/2" label="Back" onClick={onBack} type="secondary" />
      <Button className="md:w-1/2" label={nextLabel} onClick={onNext} disabled={disabled} />
    </div>
  );
};

export default FooterButtons;
