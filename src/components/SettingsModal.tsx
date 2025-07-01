import { useState } from 'react';
import Modal from './Modal';
import AvatarUpload from './AvatarUpload';
import Button from './Button/Button';

interface SettingsModalProps {
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const SettingsModal = ({ onClose, onSubmit }: SettingsModalProps) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Modal bgGradient={false} onClose={onClose}>
      <form className="flex flex-col gap-400" onSubmit={onSubmit}>
        <div className="flex flex-col gap-100">
          <h1 className="preset-3 font-bold text-neutral-900">Update your profile</h1>
          <p className="preset-6 text-neutral-600">
            Personalize your account with your name and photo.{' '}
          </p>
        </div>
        <div className="flex flex-col gap-100">
          <label htmlFor="name" className="preset-6 text-neutral-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Jane Appleseed"
            onChange={handleNameChange}
            className="preset-6 rounded-10 bg-neutral-0 border border-neutral-300 px-200 py-100 py-150 text-neutral-900"
          />
        </div>
        <AvatarUpload />
        <Button className="w-full" label="Save Changes" onClick={onSubmit} />
      </form>
    </Modal>
  );
};

export default SettingsModal;
