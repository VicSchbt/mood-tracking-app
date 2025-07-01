import Image from 'next/image';
import { TendencyType } from '../../types';

interface TendancyLineProps {
  tendency: TendencyType;
  className?: string;
}

const TendancyLine = ({ tendency, className = '' }: TendancyLineProps) => {
  const getIconSrc = (tendency: TendencyType): string => {
    switch (tendency) {
      case 'increase':
        return '/images/icon-trend-increase.svg';
      case 'decrease':
        return '/images/icon-trend-decrease.svg';
      case 'equal':
        return '/images/icon-trend-same.svg';
      default:
        return '/images/icon-trend-same.svg';
    }
  };

  const getLabel = (tendency: TendencyType): string => {
    switch (tendency) {
      case 'increase':
        return 'Increase from the previous 5 check-ins';
      case 'decrease':
        return 'Decrease from the previous 5 check-ins';
      case 'equal':
        return 'Same as the previous 5 check-ins';
      default:
        return 'Same as the previous 5 check-ins';
    }
  };

  return (
    <div className={`flex items-start gap-100 ${className}`}>
      <Image
        src={getIconSrc(tendency)}
        alt={`${tendency} trend`}
        width={16}
        height={16}
        className="pt-025 flex-shrink-0"
      />
      <span className="preset-7">{getLabel(tendency)}</span>
    </div>
  );
};

export default TendancyLine;
