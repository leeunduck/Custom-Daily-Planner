export interface AuthFormState {
  email: string;
  password: string;
  emailError: boolean;
  passwordError: boolean;
  isPasswordVisible: boolean;

  setEmail: (value: string) => void;
  setPassword: (value: string) => void;

  clearEmailError: () => void;
  clearPasswordError: () => void;

  togglePasswordVisible: () => void;

  validateLogin: () => boolean;
}
