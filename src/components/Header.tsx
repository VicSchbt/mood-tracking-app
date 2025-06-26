const Header = () => {
    return (
      <header className="flex justify-between items-center w-full px-200 pt-400">
        <div className="flex items-center gap-100">
          <img src="/images/logo.svg" alt="Mood tracker logo" className="h-full" />
        </div>
        <img
          src="/images/avatar-placeholder.svg"
          alt="User avatar"
          className="w-500 h-500 rounded-full"
        />
      </header>
    )
  }

  export default Header;