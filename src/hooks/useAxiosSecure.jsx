import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useEffect } from 'react';
import axios from 'axios';

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log('Error caught from axios interceptor-->', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          logOut();
          // navigate to login
          navigate('/login');
          console.log('holaaaaaa');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
