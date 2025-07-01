
type Props = {
  children: React.ReactNode;
  title: string;
  backgroundColor: string;
};


const AverageCard = ({ children, title, backgroundColor }: Props) => {

  return (
    <div className="flex flex-col gap-150">
      <p className="preset-5 text-neutral-900">
        {title}
        <span className="preset-7 text-neutral-600"> (Last 5 Check-ins)</span>
      </p>
      <div
        className={`${backgroundColor} rounded-16 px-200 py-300 flex flex-col gap-150 relative overflow-hidden`}
      >
        {/* Decorative background image */}
        <img
          src="/images/bg-pattern-averages.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 size-[200%] translate-x-5/8 pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AverageCard;