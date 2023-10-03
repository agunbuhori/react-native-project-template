import {HttpResponse} from '@/types/HttpResponse';
import axios from '@/utils/http/axios';

export const authenticate = async (
  email: string,
  password: string,
): Promise<{token: string}> => {
  try {
    const request = await axios.post<HttpResponse<{token: string}>>(
      'auth/login',
      {email, password},
    );
    return request.data.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async (): Promise<number> => {
  try {
    const request = await axios.post<HttpResponse<any>>('auth/logout');
    return request.data.data;
  } catch (error) {
    throw error;
  }
};
