import UserMenu from './UserMenu';

interface HeaderProps {
  onSettingsClick: () => void;
}

const Header = ({ onSettingsClick }: HeaderProps) => {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-200 pt-400">
      <div className="flex items-center gap-100">
        <img src="/images/logo.svg" alt="Mood tracker logo" className="h-full" />
      </div>
      <UserMenu onSettingsClick={onSettingsClick} />
    </header>
  );
};

export default Header;
