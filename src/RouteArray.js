
import Home from './pages/home'
import Contato from './pages/contato'

export const RouteArray = [
    {
        pathName: "/",
        componentName: Home,
        isExact: true
    },
    {
        pathName: "/contato",
        componentName: Contato,
        isExact: false
    }
];
export const MenuRoute = [
    {
        pathName: "/",
        name: "Filmes"
    },
    {
        pathName: "/contato",
        name: "Séries"
    }
]