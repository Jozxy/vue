import { createRouter, createWebHistory } from 'vue-router'
import ConditionalView from '../views/ConditionalView.vue'
import VisibilityView from '../views/VisibilityView.vue'
import ListView from '../views/ListView.vue'
import KeysView from '../views/KeysView.vue'

const routes = [
  { path: '/', component: ConditionalView },
  { path: '/v-show', component: VisibilityView },
  { path: '/v-for', component: ListView },
  { path: '/keys', component: KeysView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router