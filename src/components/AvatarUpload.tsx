'use client';

import { useRef, useState } from 'react';

const MAX_SIZE = 2 * 1024 * 1024; // 2MB

export default function AvatarUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setError('Only PNG or JPEG allowed.');
      return;
    }

    // Validate size
    if (file.size > MAX_SIZE) {
      setError('Image must be smaller than 2MB.');
      return;
    }

    // Generate preview
    const url = URL.createObjectURL(file);
    setPreview(url);
    setError(null);
  };

  const triggerUpload = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex items-start gap-200">
      {/* Avatar */}
      <div className="flex h-800 w-800 items-center justify-center overflow-hidden rounded-full bg-neutral-300">
        <img
          src={preview ? preview : '/images/avatar-placeholder.svg'}
          alt={preview ? 'Avatar' : 'Avatar Placeholder'}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Controls */}
      <div>
        <p className="preset-6 font-semibold text-neutral-900">Upload Image</p>
        <p className="preset-7 mb-100 text-neutral-600">Max 250KB, PNG or JPEG</p>
        <button
          type="button"
          onClick={triggerUpload}
          className="rounded-8 border border-neutral-600 px-200 py-100 text-neutral-900 hover:bg-neutral-200"
        >
          Upload
        </button>

        {error && <p className="preset-7 mt-100 text-red-700">{error}</p>}

        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
