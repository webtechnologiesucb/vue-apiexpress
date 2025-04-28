<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useAuthStore } from "../store/authStore";

const authStore = useAuthStore();
const films = ref([]);
const currentPage = ref(1);
const itemsPerPage = 50;
const searchQuery = ref(""); // Filtro de búsqueda

const fetchFilms = async () => {
  if (!authStore.token) return;

  try {
    const response = await axios.get("http://localhost:3000/api/films", {
      headers: { Authorization: `Bearer ${authStore.token}` },
    });
    films.value = response.data;
  } catch (error) {
    console.error("Error al obtener películas", error);
  }
};

onMounted(fetchFilms);

const filteredFilms = computed(() => {
  return films.value.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const paginatedFilms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredFilms.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(filteredFilms.value.length / itemsPerPage)
);

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const firstPage = () => {
  currentPage.value = 1;
}; // Ir a la primera página
const lastPage = () => {
  currentPage.value = totalPages.value;
}; // Ir a la última página
</script>

<template>
  <div class="container mt-4">
    <h1>Películas Disponibles</h1>

    <!-- Campo de búsqueda -->
    <div class="mb-3">
      <input
        v-model="searchQuery"
        type="text"
        class="form-control"
        placeholder="Buscar por título..."
      />
    </div>

    <!-- Tabla paginada -->
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="film in paginatedFilms" :key="film.id">
          <td>{{ film.id }}</td>
          <td>{{ film.title }}</td>
          <td>{{ film.description }}</td>
          <td>{{ film.releaseYear }}</td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-between align-items-center">
      <button
        @click="firstPage"
        :disabled="currentPage === 1"
        class="btn btn-outline-primary"
      >
        |&lt;
      </button>
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="btn btn-secondary"
      >
        &lt;&lt;
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="btn btn-secondary"
      >
        &gt;&gt;
      </button>
      <button
        @click="lastPage"
        :disabled="currentPage === totalPages"
        class="btn btn-outline-primary"
      >
        &gt;|
      </button>
    </div>
  </div>
</template>
