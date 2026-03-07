
import Cookies from 'js-cookie';

 export const cookieHelper= {

set: (key, value, expiresDays = 30) => { 
  const safeValue = typeof value === 'object' ? JSON.stringify(value) : value;
  Cookies.set(key, safeValue, {
    expires: expiresDays, 
    path: '/',
    secure: true,
    sameSite: 'Strict',
  });
},


  get: (key) => {
    const value = Cookies.get(key);
    try {
      return value ? JSON.parse(value) : null;
    } catch (e) {
      return value || null;
    }
  },

  remove: (key) => {
    Cookies.remove(key, { path: '/' });
  },
};


