import { useEffect, useRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
  displayOverlay?: boolean;
  bgGradient?: boolean;
  className?: string;
  onClose: () => void;
}

const Modal = ({
  children,
  className,
  displayOverlay = true,
  bgGradient = true,
  onClose,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${displayOverlay ? 'bg-black/50' : ''} `}
    >
      <div
        ref={modalRef}
        className={`${className} ${bgGradient ? 'bg-gradient-light' : 'bg-neutral-0'} relative flex w-[calc(100vw-2rem)] max-w-xl flex-col gap-300 rounded-2xl px-250 py-400 shadow-lg md:gap-400 md:px-500 md:py-600`}
      >
        <button
          className="absolute top-400 right-400 text-2xl text-neutral-300 hover:text-neutral-500"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
