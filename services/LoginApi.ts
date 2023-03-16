import {API_URL} from '../constants/constants';
import {postJson} from '../hooks/http';

// export const loginApi = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }): Promise<{
//   email: string;
//   employee: string;
//   id: string;
//   is_active: boolean;
//   token: string;
// } | null> => {
//   try {
//     const response = await fetch(`${API_URL}/auth/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     return response.json();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

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
