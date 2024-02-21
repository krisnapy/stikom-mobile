import { useForm } from "react-hook-form";

import { authStore } from "stores/auth-store";
import { authApi } from "services/api/auth-api";

export default function useLogin() {
  const methods = useForm();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      const response = await authApi.login(data.username, data.password);

      if (response.ok) {
        authStore.state.token = response.headers?.authorization || "";
        authStore.state.user = response.data.user;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { methods, onSubmit };
}
