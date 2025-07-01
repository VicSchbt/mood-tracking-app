'use client';

import Container from '@/components/Container';
import useAuthStore from '@/app/store/authStore';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from '@/components/Login/AuthForm';
import OnboardingForm from '@/components/Login/OnboardingForm';

const LoginPage = () => {
  const { login, signup } = useAuthStore();
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [onboarding, setOnboarding] = useState(false);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'signin' ? 'signup' : 'signin'));
    setError('');
  }, []);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signin') {
      const success = await login(email, password);
      if (success) {
        router.push('/');
      } else {
        setError('Invalid credentials');
      }
    } else {
      if (email && password) {
        setOnboarding(true);
        setError('');
      } else {
        setError('Please fill in all fields');
      }
    }
  };

  const handleOnboardingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await signup(email, password, name);
    if (success) {
      router.push('/');
    } else {
      setError('Email already in use');
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-start gap-400 px-200 py-1000">
      <img src="/images/logo.svg" alt="logo" className="h-500" />
      <Container className="max-w-[500px]">
        {!onboarding ? (
          <AuthForm
            mode={mode}
            email={email}
            password={password}
            error={error}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleAuthSubmit}
            toggleMode={toggleMode}
          />
        ) : (
          <OnboardingForm
            name={name}
            onNameChange={(e) => setName(e.target.value)}
            onSubmit={handleOnboardingSubmit}
          />
        )}
      </Container>
    </div>
  );
};

export default LoginPage;
