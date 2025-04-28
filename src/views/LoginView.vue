<script setup>
import axios from "axios";
import { ref } from "vue";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const user = ref("");
const password = ref("");
const login = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      username: user.value,
      password: password.value,
    });
    authStore.token = response.data.token;
    authStore.user = user.value;
    localStorage.setItem("jwt", authStore.token);
    router.push("/films");
  } catch (error) {
    console.error(
      "Error en inicio de sesión",
      error.response?.data || error.message
    );
  }
};
</script>

<template>
  <div class="container mt-5">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="user" class="form-label">Usuario</label>
        <input v-model="user" type="text" class="form-control" id="user" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  </div>
</template>
