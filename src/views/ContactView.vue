<script>
  export default{
    methods: {
      GoHome(){
        this.$router.push({name: 'home'})
      }
    }
  }
</script>
<template>
  <div class="about">
    <br>
    <br>
    <br>
    <h1>This is an about page</h1>
    <button @click="GoHome" class="btn btn-outline-primary">Volver al Inicio</button>
  </div>
</template>


