import { defineStore } from 'pinia';
import { useCookie } from '#imports';


export const useCookieStore = defineStore('cookie', () => {
  const testCookie = useCookie('test', {
    default: () => 'default-value',
  });

  const updateCookie = () => {
    testCookie.value = Math.random().toString();
  };

  return {
    testCookie,
    updateCookie,
  };
});
