import type { AuthFormSubmitCallback, AuthFormSubmitHandler } from "@/types/auth";

export function useAuthFormSubmit(onSubmitCallback: AuthFormSubmitCallback): AuthFormSubmitHandler {
  return (event) => {
    event.preventDefault();
    onSubmitCallback();
  };
}
