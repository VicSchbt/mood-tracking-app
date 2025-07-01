'use client';

import { useState, useRef, useEffect } from 'react';
import useAuthStore from '@/app/store/authStore';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  onSettingsClick: () => void;
}

const UserMenu = ({ onSettingsClick }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuthStore();
  const menuRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthStore();
  const router = useRouter();
  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-100 focus:outline-none"
      >
        <img
          src="/images/avatar-placeholder.svg"
          alt="User avatar"
          className="h-500 w-500 rounded-full object-cover"
        />
        <img
          src="/images/icon-dropdown-arrow.svg"
          alt="See menu"
          className={`h-200 w-200 text-neutral-900 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="bg-neutral-0 absolute right-0 z-50 mt-200 w-[calc(100vw-2rem)] rounded-2xl p-300 shadow-lg md:w-auto md:min-w-[200px]">
          <div className="mb-300">
            <p className="preset-6 font-medium text-neutral-900">{user?.name}</p>
            <p className="preset-7 text-neutral-300">{user?.email}</p>
            <hr className="my-200 border-neutral-100" />
          </div>
          <ul className="flex flex-col gap-200">
            <li>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-150 hover:text-blue-600"
                onClick={onSettingsClick}
              >
                <img src="/images/icon-settings.svg" alt="Settings" className="h-200 w-200" />
                <span className="preset-5">Settings</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-150 hover:text-blue-600"
                onClick={handleLogout}
              >
                <img src="/images/icon-logout.svg" alt="Logout" className="h-200 w-200" />
                <span className="preset-5">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
