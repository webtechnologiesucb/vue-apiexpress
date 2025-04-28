<script setup>
import { ref } from "vue";
import axios from "axios";
import { useAuthStore } from "../store/authStore";

const authStore = useAuthStore();
const film = ref(null);
const filmId = ref(""); // ID ingresado por el usuario
const isExpanded = ref(false); // Estado para controlar la expansión del accordion

const fetchFilmById = async () => {
  if (!authStore.token || !filmId.value) return;

  try {
    const response = await axios.get(
      `http://localhost:3000/api/films/${filmId.value}`,
      {
        headers: { Authorization: `Bearer ${authStore.token}` },
      }
    );
    film.value = response.data;
    isExpanded.value = true; // Expande automáticamente después de la búsqueda
  } catch (error) {
    console.error("Error al obtener la película", error);
  }
};
</script>

<template>
  <div class="container mt-4">
    <h1>Buscar Película por ID</h1>

    <!-- Campo para ingresar ID -->
    <div class="mb-3">
      <input
        v-model="filmId"
        type="text"
        class="form-control"
        placeholder="Ingrese ID de película..."
      />
      <button @click="fetchFilmById" class="btn btn-primary mt-2">
        Buscar
      </button>
    </div>

    <!-- Card tipo accordion -->
    <div v-if="film" class="accordion" id="filmAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            @click="isExpanded = !isExpanded"
            :class="{ collapsed: !isExpanded }"
            aria-expanded="false"
            aria-controls="collapseFilm"
          >
            {{ film.title }} ({{ film.releaseYear }})
          </button>
        </h2>
        <div
          id="collapseFilm"
          class="accordion-collapse"
          :class="{ collapse: !isExpanded, show: isExpanded }"
        >
          <div class="accordion-body">
            <img
              width="25%"
              src="../assets/de-pelicula.png"
              class="img-fluid rounded mb-3"
              alt="Portada"
            />
            <p><strong>Título:</strong> {{ film.title }}</p>
            <p><strong>Descripción:</strong> {{ film.description }}</p>
            <p><strong>Año:</strong> {{ film.releaseYear }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
