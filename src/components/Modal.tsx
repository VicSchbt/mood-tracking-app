interface ModalProps {
  children: React.ReactNode;
  displayOverlay?: boolean;
  bgGradient?: boolean;
  className?: string;
}

const Modal = ({ children, className, displayOverlay = true, bgGradient = true }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${displayOverlay ? 'bg-black/50' : ''} `}
    >
      <div
        className={`${className} ${bgGradient ? 'bg-gradient-light' : 'bg-neutral-0'} relative flex w-full max-w-xl flex-col gap-300 rounded-2xl px-250 py-400 shadow-lg md:gap-400 md:px-500 md:py-600`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
