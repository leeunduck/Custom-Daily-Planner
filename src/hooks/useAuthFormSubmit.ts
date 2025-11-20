import type { FormEvent } from "react";

type AuthFormSubmitHandler = (event: FormEvent<HTMLFormElement>) => void;

export function useAuthFormSubmit(onSubmit: AuthFormSubmitHandler): AuthFormSubmitHandler {
  return (event) => {
    event.preventDefault();
    onSubmit(event);
  };
}
