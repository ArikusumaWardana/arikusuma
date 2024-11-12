import { ref } from 'vue'

// Import Assets Tech Stack
import html from '@/assets/skill/html.png'
import css from '@/assets/skill/css.png'
import js from '@/assets/skill/js.png'
import vue from '@/assets/skill/vue.png'
import php from '@/assets/skill/php.png'
import laravel from '@/assets/skill/laravel.png'
import bootstrap from '@/assets/skill/bootstrap.png'
import tailwind from '@/assets/skill/tailwind.png'
import mysql from '@/assets/skill/msql.png'

// Import Assets Tools
import vscode from '@/assets/tools/vscode.png'
import webstorm from '@/assets/tools/webstorms.png'
import phpstorm from '@/assets/tools/phpstorm.png'
import dataGrip from '@/assets/tools/datagrip.png'
import git from '@/assets/tools/git.png'
import github from '@/assets/tools/github.png'
import xampp from '@/assets/tools/xampp.png'
import laragon from '@/assets/tools/laragon.png'

export const skillList = ref([
    {
        name: 'HTML',
        icon: html,
        level: 'beginner',
        link: 'https://html.com/'
    },
    {
        name: 'CSS',
        icon: css,
        level: 'beginner',
        link: 'https://www.w3.org/Style/CSS/Overview.en.html'
    },
    {
        name: 'Javascript',
        icon: js,
        level: 'beginner',
        link: 'https://www.javascript.com/'
    },
    {
        name: 'Vue',
        icon: vue,
        level: 'beginner',
        link: 'https://vuejs.org/'
    },
    {
        name: 'PHP',
        icon: php,
        level: 'beginner',
        link: 'https://www.php.net/'
    },
    {
        name: 'Laravel',
        icon: laravel,
        level: 'beginner',
        link: 'https://laravel.com/'
    },
    {
        name: 'Bootstrap',
        icon: bootstrap,
        level: 'beginner',
        link: 'https://getbootstrap.com/'
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
        level: 'beginner',
        link: 'https://tailwindcss.com/'
    },
    {
        name: 'MySQL',
        icon: mysql,
        level: 'beginner',
        link: 'https://www.mysql.com/'
    }
])

export const toolList = ref([
    {
        toolName: 'VS Code',
        toolImage: vscode,
        toolLink: 'https://code.visualstudio.com/'
    },
    {
        toolName: 'Webstorm',
        toolImage: webstorm,
        toolLink: 'https://www.jetbrains.com/webstorm/'
    },
    {
        toolName: 'Phpstorm',
        toolImage: phpstorm,
        toolLink: 'https://www.jetbrains.com/phpstorm/'
    },
    {
        toolName: 'Data Grip',
        toolImage: dataGrip,
        toolLink: 'https://www.jetbrains.com/datagrip/?source=google&medium=cpc&campaign=APAC_en_ASIA_DataGrip_Branded&term=datagrip&content=555122603976&gad_source=1&gclid=Cj0KCQjwpNuyBhCuARIsANJqL9PJxAlpsbPPB50ckDKfgYV6nMFKYb9UzPjhbDfGBE4fzygAwVNNJB8aAhWhEALw_wcB'
    },
    {
        toolName: 'GIT',
        toolImage: git,
        toolLink: 'https://git-scm.com/'
    },
    {
        toolName: 'Github',
        toolImage: github,
        toolLink: 'https://github.com/'
    },
    {
        toolName: 'XAMPP',
        toolImage: xampp,
        toolLink: 'https://www.apachefriends.org/'
    },
    {
        toolName: 'Laragon',
        toolImage: laragon,
        toolLink: 'https://laragon.org/index.html'
    }
])