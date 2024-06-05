import { ref } from 'vue'
let path = 'assets/project/'


export const projectList = ref([
        {
            title: 'Movieque Website',
            image: path + 'movieque.png',
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
            image: path + 'ScxLyrics.png',
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
            image: path + 'NovelsUp.png',
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
            image: path + 'Clock.png',
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
            title: 'Buku Explore Website',
            image: path + 'BukuExplore.png',
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
            image: path + 'Kwitansi.png',
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
            image: path + 'no-image.png',
            techStack: [
                {techName: 'Golang', techClass: 'fab fa-golang text-blue-400'}
            ],
            links: [
                {icon: 'fab fa-github', routes: 'https://github.com/ArikusumaWardana/items-repository-app'}
            ]
        }
])
