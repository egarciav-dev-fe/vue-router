<template>
  <NavBar />
  
  <router-view/>
  
  <medios-pago/>
  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer,
    MediosPago
  }
}
</script>
