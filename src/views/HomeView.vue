<script setup>
import { onMounted } from "vue";
import * as bootstrap from "bootstrap"; // Importar Bootstrap correctamente

onMounted(() => {
  const carouselElement = document.querySelector("#carouselExample");
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000, // Cambio automático cada 5 segundos
      ride: "carousel",
    });
  }
});
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Bienvenidos a Sakila - Videoclub</h1>

    <!-- Carrusel de imágenes -->
    <div
      id="carouselExample"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/236/321/non_2x/movie-trendy-banner-vector.jpg"
            class="d-block w-100 img-fluid rounded"
            alt="Banner de cine moderno"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/850/617/non_2x/realistic-cinema-poster-vector.jpg"
            class="d-block w-100 img-fluid rounded"
            alt="Póster de cine realista"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg?semt=ais_hybrid&w=740"
            class="d-block w-100 img-fluid rounded"
            alt="Banner de cine digital con claqueta"
          />
        </div>
      </div>

      <!-- Botones de navegación -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel img {
  max-height: 400px;
  object-fit: cover;
}
</style>
