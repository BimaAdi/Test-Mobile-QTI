import {API_URL} from '../constants/constants';
import {postJson} from '../hooks/http';

export const loginApi = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return postJson<
    {email: string; password: string},
    {
      email: string;
      employee: string;
      id: string;
      is_active: boolean;
      token: string;
    }
  >(`${API_URL}/auth/login`, {email, password});
};
