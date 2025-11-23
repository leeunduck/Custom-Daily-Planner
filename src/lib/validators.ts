export const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isValidPassword = (value: string): boolean =>
  value.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(value);

export const isValidName = (value: string): boolean => value.trim().length >= 2;

export const isValidCode = (value: string): boolean => /^\d{4}$/.test(value);
