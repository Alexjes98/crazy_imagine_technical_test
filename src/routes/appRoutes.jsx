/*
    Este archivo contiene la configuración de las rutas de la aplicación.
    Contiene un arreglo de objetos, cada objeto representa una ruta.
    Cada objeto tiene las siguientes propiedades:
        - path: la ruta de la página
        - element: el componente que se va a renderizar
        - state: el estado de la ruta
        - topbarProps: las propiedades de la barra superior
        - sidebarProps: las propiedades de la barra lateral
*/
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import CalculateIcon from '@mui/icons-material/Calculate';
import CollectionsIcon from '@mui/icons-material/Collections'
import LoginIcon from '@mui/icons-material/Login'

import TipCalculator from '../pages/TipCalculator'
import ImageGallery from '../pages/ImageGallery'
import Register from '../pages/Register'
import Login from '../pages/Login'

const appRoutes = [
    {
        path: "/login",
        element: <Login />,
        state: "login",
        topbarProps: {
            displayText: "Login",
        },
        sidebarProps: {
            displayText: "Login",
            icon: <LoginIcon />
        }
    },
    {
        path: "/register",
        element: <Register />,
        state: "register",
        topbarProps: {
            displayText: "Registro",
        },
        sidebarProps: {
            displayText: "Registro",
            icon: <AssignmentIndIcon />
        }
    },
    {
        path: "/tip_calculator",
        element: <TipCalculator />,
        state: "tips",
        topbarProps: {
            displayText: "Propinas",
        },
        sidebarProps: {
            displayText: "Calculadora de propinas",
            icon: <CalculateIcon />
        }
    },
    {
        path: "/image_gallery",

        element: <ImageGallery />,
        state: "gallery",
        topbarProps: {
            displayText: "Galeria",
        },
        sidebarProps: {
            displayText: "Galeria de imagenes",
            icon: <CollectionsIcon />
        }
    }
];

export default appRoutes;