// src/components/Header.tsx
export default function Header() {
    return (
      <header className="flex justify-between items-center mb-200">
        <div className="flex items-center gap-100">
          <img src="/images/logo.svg" alt="Mood tracker logo" className="w-150 h-150" />
          <span className="font-semibold text-text-preset-7">Mood tracker</span>
        </div>
        <img
          src="/images/avatar-placeholder.png"
          alt="User avatar"
          className="w-300 h-300 rounded-full"
        />
      </header>
    )
  }
  