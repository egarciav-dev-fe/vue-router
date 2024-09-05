import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
// import ProductView from '@/views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    props: ()=>{
      return {
      nombre: 'Desayunior',
      descripcion: 'Aqui esta el junior mamita aqui esta el Junior para tu Desayunior',
      precio: 7000,
      cantidad: 'solo para una'
      }
    },
    component: () => import('@/views/ProductView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
