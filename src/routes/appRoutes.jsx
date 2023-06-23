import CollectionsIcon from '@mui/icons-material/Collections';
import CalculateIcon from '@mui/icons-material/Calculate';
import LoginIcon from '@mui/icons-material/Login';
import { Home } from '@mui/icons-material';

import Dashboard from '../pages/Dashboard';
import TipCalculator from '../pages/TipCalculator';
import ImageGallery from '../pages/ImageGallery';
import Register from '../pages/Register';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Login from '../pages/Login';

const appRoutes = [
    {
        path: "/",
        element: <Dashboard />,
        state: "home",
        topbarProps: {
            displayText: "Home",
        },
        sidebarProps: {
            displayText: "Home",
            icon: <Home />
        }
    },
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