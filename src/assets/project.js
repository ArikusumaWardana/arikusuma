import { ref } from 'vue'
import movieque from '@/assets/project/movieque.png'
import ScxLyrics from '@/assets/project/ScxLyrics.png'
import NovelsUp from '@/assets/project/NovelsUp.png'
import Clock from '@/assets/project/Clock.png'
import RefillUniverse from '@/assets/project/refillUniverse.png'
import PrimdevBlog from '@/assets/project/primdevBlog.png'
import BukuExplore from '@/assets/project/BukuExplore.png'
import Kwitansi from '@/assets/project/Kwitansi.png'
import noImage from '@/assets/project/no-image.png'


export const projectList = ref([
        {
            title: 'Movieque Website',
            image: movieque,
            techStack: [
                {techName: 'HTML', techClass: 'fab fa-html5 text-orange-500'},
                {techName: 'CSS', techClass: 'fab fa-css3-alt text-blue-500'},
                {techName: 'Javascript', techClass: 'fab fa-js text-yellow-500'},
                {techName: 'Bootstrap', techClass: 'fab fa-bootstrap text-purple-500'},
                {techName: 'API', techClass: 'fa-solid fa-fire text-orange-500'}
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/movieque'},
                {icon: 'fa-solid fa-globe', routes: 'https://arikusumawardana.github.io/movieque/'}
            ]
        },
        {
            title: 'ScxLyrics Website',
            image: ScxLyrics,
            techStack: [
                {techName: 'HTML', techClass: 'fab fa-html5 text-orange-500'},
                {techName: 'CSS', techClass: 'fab fa-css3-alt text-blue-500'},
                {techName: 'Javascript', techClass: 'fab fa-js text-yellow-500'},
                {techName: 'Bootstrap', techClass: 'fab fa-bootstrap text-purple-500'},
                {techName: 'PHP', techClass: 'fab fa-php text-blue-800'},
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/scxlyrics'}
            ]
        },
        {
            title: 'Novels Up Website',
            image: NovelsUp,
            techStack: [
                {techName: 'HTML', techClass: 'fab fa-html5 text-orange-500'},
                {techName: 'CSS', techClass: 'fab fa-css3-alt text-blue-500'},
                {techName: 'Javascript', techClass: 'fab fa-js text-yellow-500'},
                {techName: 'Bootstrap', techClass: 'fab fa-bootstrap text-purple-500'},
                {techName: 'Laravel', techClass: 'fab fa-laravel text-red-600'},
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/Novels-Up'}
            ]
        },
        {
            title: 'Clock Website',
            image: Clock,
            techStack: [
                {techName: 'HTML', techClass: 'fab fa-html5 text-orange-500'},
                {techName: 'CSS', techClass: 'fab fa-css3-alt text-blue-500'},
                {techName: 'Javascript', techClass: 'fab fa-js text-yellow-500'},
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/Clock'},
                {icon: 'fa-solid fa-globe', routes: 'https://arikusumawardana.github.io/Clock/'}
            ]
        }, 
        {
            title: 'Refill Universe Website',
            image: RefillUniverse,
            techStack: [
                {techName: 'Vue', techClass: 'fab fa-vuejs text-green-600'},
                {texhName: 'Tailwind CSS', techClass: 'fab fa-css3-alt text-blue-500'},
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/refill-universe'},
                {icon: 'fa-solid fa-globe', routes: 'https://refill-universe.vercel.app/'}
            ]
        },
        {
            title: 'Primdev Blog',
            image: PrimdevBlog,
            techStack: [
                {techName: 'Vue', techClass: 'fab fa-vuejs text-green-600'},
                {texhName: 'Tailwind CSS', techClass: 'fab fa-css3-alt text-blue-500'},
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/primdev-blog'},
                {icon: 'fa-solid fa-globe', routes: 'https://primdev-blog.vercel.app/'}
            ]
        },
        {
            title: 'Buku Explore Website',
            image: BukuExplore,
            techStack: [
                {techName: 'HTML', techClass: 'fab fa-html5 text-orange-500'},
                {techName: 'CSS', techClass: 'fab fa-css3-alt text-blue-500'},
                {techName: 'Javascript', techClass: 'fab fa-js text-yellow-500'},
                {techName: 'Bootstrap', techClass: 'fab fa-bootstrap text-purple-500'},
                {techName: 'Laravel', techClass: 'fab fa-laravel text-red-600'},
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/BukuExplore-Website'}
            ]
        }, 
        {
            title: 'Kwitansi Website',
            image: Kwitansi,
            techStack: [
                {techName: 'HTML', techClass: 'fab fa-html5 text-orange-500'},
                {techName: 'CSS', techClass: 'fab fa-css3-alt text-blue-500'},
                {techName: 'Bootstrap', techClass: 'fab fa-bootstrap text-purple-500'},
                {techName: 'PHP', techClass: 'fab fa-php text-blue-800'},
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/form-kwitansi'}
            ]
        },
        {
            title: 'Item Repository App',
            image: noImage,
            techStack: [
                {techName: 'Golang', techClass: 'fab fa-golang text-blue-400'}
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/items-repository-app'}
            ]
        }
])
