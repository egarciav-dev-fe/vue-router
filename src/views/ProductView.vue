<script>
import Card from '@/components/Card.vue';

  export default{
    components:{
      Card
    },
    methods: {
      GoHome(){
        this.$router.push({name: 'home'})
      }
    }, 
    props: {
      nombre: {
        type: String,
        required: true
      },
      descripcion: {
        type: String,
        required: true 
      },
      precio:{
        type: Number, 
        required: true
      },
      cantidad: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <div>
    <br>
    <br>
    <br>
    <h1>Productos</h1>
    <!-- cartas -->
  <section class="container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- primera -->
      <div class="col-sm-4 col-12 px-5 mb-4">

        <div class="card">
          <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{nombre}}</h5>
            <p class="card-text">
              {{descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: {{precio}}</li>
            <li class="list-group-item">Cantidad: {{cantidad}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
    <button @click="GoHome" class="btn btn-outline-primary">Volver al Inicio</button>
    
  </div>
</template>