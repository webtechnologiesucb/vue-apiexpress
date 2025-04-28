<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Sobre Nosotros</h1>

    <!-- Sección Misión, Visión, Valores -->
    <div class="row text-center">
      <div class="col-md-4">
        <div class="card p-3">
          <h3>Misión</h3>
          <p>
            Facilitar el acceso a una amplia colección de películas, ofreciendo
            una experiencia de alquiler eficiente y enriquecedora. Nos
            comprometemos a brindar un servicio de calidad con tecnología
            avanzada para mejorar la administración y gestión de datos en la
            industria del entretenimiento.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3">
          <h3>Visión</h3>
          <p>
            Ser la plataforma de referencia en la gestión de alquileres de
            películas, adaptándonos a la evolución digital para ofrecer opciones
            innovadoras, automatizadas y accesibles a clientes y negocios de
            todo el mundo.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3">
          <h3>Valores</h3>
          <p>
            🔹 Innovación: Implementamos tecnología avanzada para mejorar la
            experiencia de gestión de películas y clientes.<br />
            🔹 Eficiencia: Optimizamos procesos para que el alquiler y gestión
            de datos sean rápidos y fluidos.<br />
            🔹 Accesibilidad: Nos esforzamos por ofrecer soluciones para todo
            tipo de usuarios y negocios.<br />
            🔹 Compromiso con la comunidad: Promovemos el acceso al
            entretenimiento y la preservación del cine como un arte.<br />
            🔹 Adaptabilidad: Evolucionamos constantemente para responder a las
            demandas de un mundo digital.
          </p>
        </div>
      </div>
    </div>

    <!-- Sección de Empleados -->
    <h2 class="text-center mt-5 mb-4">Nuestro Equipo</h2>
    <div class="row">
      <div class="col-md-4" v-for="employee in employees" :key="employee.id">
        <div class="card text-center">
          <img :src="employee.image" class="card-img-top" alt="Foto" />
          <div class="card-body">
            <h5 class="card-title">{{ employee.name }}</h5>
            <p class="card-text">{{ employee.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Redes Sociales -->
    <h2 class="text-center mt-5 mb-3">Síguenos</h2>
    <div class="d-flex justify-content-center gap-3">
      <a href="https://facebook.com" target="_blank" class="btn btn-primary">
        <i class="fab fa-facebook"></i> Facebook
      </a>
      <a href="https://twitter.com" target="_blank" class="btn btn-info">
        <i class="fab fa-twitter"></i> Twitter
      </a>
      <a href="https://linkedin.com" target="_blank" class="btn btn-dark">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const employees = ref([
  {
    id: 1,
    name: "Mike Hillyer",
    role: "Servicio al Cliente",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAafoPkDjsguukBUPpJMa7w_CMhjF1yjfnw&s",
  },
  {
    id: 2,
    name: "Carol Danvers",
    role: "Administración",
    image:
      "https://album.mediaset.es/eimg/2020/02/07/NGDJvVZfnaOxk5nV7QDqf4.jpg?w=1200&h=900",
  },
  {
    id: 3,
    name: "Jon Stephens",
    role: "Servicio al Cliente",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7U6RvwIB18i9xamgPyqfkNrNYEBvIVD-vQ&s",
  },
]);
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
.card img {
  height: 150px;
  object-fit: cover;
}
</style>
