interface StepperProps {
  current: number;
}

const Stepper = ({ current }: StepperProps) => {
  return (
    <>
      <div role="status" className="sr-only" aria-live="polite">
        Step {current + 1} of 4
      </div>
      <div
        role="progressbar"
        aria-label="Form Step Progress"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={4}
        className="grid grid-cols-4 gap-150"
      >
        {Array.from({ length: 4 }).map((_, index) => {
          const isCompletedOrCurrent = index <= current;

          return (
            <div
              key={index}
              className={`h-075 w-full rounded-full transition-all duration-300 ease-in-out ${isCompletedOrCurrent ? 'bg-blue-600' : 'bg-blue-100'} `}
            />
          );
        })}
      </div>
    </>
  );
};

export default Stepper;
