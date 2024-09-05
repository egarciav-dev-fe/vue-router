<script>
  export default {
    name: 'SingleCard',
    props:['nombre','descripcion','precio','cantidad']
  }
</script>


<template>
  <div class="card">
    <img
      src="../assets/img/colaciones.jpg"
      class="card-img-top"
      alt="colaciones"
    />
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ nombre }}</h5>
      <p class="card-text">
        {{ descripcion }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Precio: {{ precio }}</li>
      <li class="list-group-item">Cantidad: {{ cantidad }}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Ver más</a>
      <a href="#" class="card-link">Comprar</a>
    </div>
  </div>
</template>
