import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import user from '../views/user.vue'
import note from '../views/products.vue'
import product from '../views/product.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: user

    },
    {
      path: '/note',
      name: 'note',
      component: note
  
      },
      {
        path: '/note/product',
        name: 'product',
        component: product
    
        }
    
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
