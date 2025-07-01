const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-200 pt-400">
      <div className="flex items-center gap-100">
        <img src="/images/logo.svg" alt="Mood tracker logo" className="h-full" />
      </div>
      <img
        src="/images/avatar-placeholder.svg"
        alt="User avatar"
        className="h-500 w-500 rounded-full"
      />
    </header>
  );
};

export default Header;
