import Button from '../Button/Button';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  email: string;
  password: string;
  error: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  toggleMode: () => void;
}

const AuthForm = ({
  mode,
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  toggleMode,
}: AuthFormProps) => (
  <form className="flex flex-col gap-400" onSubmit={onSubmit}>
    <div className="flex flex-col gap-100">
      <h1 className="preset-3 font-bold text-neutral-900">
        {mode === 'signin' ? 'Welcome back' : 'Create an account'}
      </h1>
      <p className="preset-6 text-neutral-600">
        {mode === 'signin'
          ? ' Log in to continue tracking your mood and sleep.'
          : 'Join to track your daily mood and sleep with ease.'}
      </p>
    </div>
    <div className="flex flex-col gap-250">
      <div className="flex flex-col gap-100">
        <label htmlFor="email" className="preset-6 text-neutral-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          placeholder="name@example.com"
          className="preset-6 rounded-10 bg-neutral-0 border border-neutral-300 px-200 py-100 py-150 text-neutral-900"
        />
        {error && <p className="preset-6 text-red-700">{error}</p>}
      </div>
      <div className="flex flex-col gap-100">
        <label htmlFor="password" className="preset-6 text-neutral-900">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          className="preset-6 rounded-10 bg-neutral-0 border border-neutral-300 px-200 py-100 py-150 text-neutral-900"
        />
      </div>
    </div>
    <Button className="w-full" label={mode === 'signin' ? 'Login' : 'Sign up'} onClick={onSubmit} />
    <p className="preset-6 text-center text-neutral-600">
      {mode === 'signin' ? "Haven't got an account?" : 'Already have an account?'}
      <button
        type="button"
        className="preset-6 ml-2 cursor-pointer text-blue-600 hover:underline"
        onClick={toggleMode}
      >
        {mode === 'signin' ? 'Sign up' : 'Login'}
      </button>
    </p>
  </form>
);

export default AuthForm;
