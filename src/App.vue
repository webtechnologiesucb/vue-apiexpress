<script setup>
import { useAuthStore } from "./store/authStore";
import { useRouter, RouterLink, RouterView } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const logoutAndRedirect = () => {
  authStore.logout();
  router.push("/about"); // Redirigir después de cerrar sesión
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">Sakila</RouterLink>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">Nosotros</RouterLink>
          </li>
          <li v-if="authStore.token" class="nav-item">
            <RouterLink to="/films" class="nav-link">Películas</RouterLink>
          </li>
          <li v-if="authStore.token" class="nav-item">
            <RouterLink to="/filmsid" class="nav-link"
              >Buscar Películas</RouterLink
            >
          </li>
          <div v-if="authStore.token" class="navbar-text ms-3">
            <strong>Bienvenido, <br />{{ authStore.user }}!</strong>
          </div>
          <li v-if="authStore.token" class="nav-item">
            <button @click="logoutAndRedirect" class="btn btn-danger">
              Cerrar Sesión
            </button>
          </li>
          <li v-else class="nav-item">
            <RouterLink to="/login" class="btn btn-primary"
              >Iniciar Sesión</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container mt-4">
    <RouterView />
  </main>
</template>

<style scoped>
.container-fluid {
  max-width: 1200px;
}
.navbar-text {
  font-size: 16px;
  color: #333;
}
</style>
