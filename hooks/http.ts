import axios, {AxiosResponse, AxiosError} from 'axios';

export function postJson<Req, Res>(
  url: string,
  data?: Req,
): Promise<AxiosResponse<Res, any>> {
  return axios.post<Res>(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export interface ErrorType<T> extends AxiosError<T> {}
