import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter } from 'vue-router'; // Importar Vue Router

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwt') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  actions: {
    async login(user, password) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', { user, password });
        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem('jwt', this.token);
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        console.error('Error en inicio de sesión', error);
      }
    },
    logout() {
      const router = useRouter(); // Definir router dentro de la acción
      this.token = null;
      this.user = null;
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
    }
  }
});