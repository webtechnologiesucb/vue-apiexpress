import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    message: 'Hola desde Pinia'
  }),
  actions: {
    setMessage(newMessage) {
      this.message = newMessage;
    }
  }
});