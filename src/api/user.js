import RH from './request-handler';

export const signIn = async (payload) => {
  const res = await RH.post('/users/login', payload);
  return res;
};
