import { ApiCore } from "./api-core";

class AuthApi extends ApiCore {
  async login(username: string, password: string) {
    return await this.post({
      path: "/auth/login",
      payload: { username, password },
    });
  }

  async logout() {
    return await this.delete({
      path: "/auth/logout",
    });
  }
}

export const authApi = new AuthApi();
