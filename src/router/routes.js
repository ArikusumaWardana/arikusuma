// import App from '@/App.vue'
import WebTemplates from '@/views/templates/WebTemplates.vue'
import About from '@/views/pages/About.vue'
import Home from '@/views/pages/Home.vue'
import Project from '@/views/pages/Project.vue'
import Skill from '@/views/pages/Skill.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: WebTemplates,
    children: [
      {
        path: '/',
        name: 'home-page',
        component: Home,
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/about',
        name: 'about-page',
        component: About,
        meta: {
          title: 'About'
        }
      },
      {
        path: '/project',
        name: 'project-page',
        component: Project,
        meta: {
          title: 'Project'
        }
      },
      {
        path: '/skill',
        name: 'skill-page',
        component: Skill,
        meta: {
          title: 'Skill & Tools'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return {top: 0}
    }
  }
})

export default router
