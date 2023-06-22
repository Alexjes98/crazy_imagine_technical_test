import CollectionsIcon from '@mui/icons-material/Collections';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Home } from '@mui/icons-material';

import Dashboard from '../pages/Dashboard';
import TipCalculator from '../pages/TipCalculator';
import ImageGallery from '../pages/ImageGallery';
import Register from '../pages/Register';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const appRoutes = [
    {
        path: "/",
        element: <Dashboard />,
        roles: ["Admin", "User"],
        state: "home",
        sidebarProps: {
            displayText: "Home",
            icon: <Home />
        }
    },
    {
        path: "/register",
        element: <Register />,
        roles: ["Admin", "User"],
        state: "register",
        sidebarProps: {
            displayText: "Registro",
            icon: <AssignmentIndIcon />
        }
    },
    {
        path: "/tip_calculator",
       
        element: <TipCalculator />,
        roles: ["Admin", "User"],
        state: "tips",
        sidebarProps: {
            displayText: "Calculadora de propinas",
            icon: <CalculateIcon />
        }
    },
    {
        path: "/image_gallery",
        
        element: <ImageGallery />,
        roles: ["Admin", "User"],
        state: "gallery",
        sidebarProps: {
            displayText: "Galeria de imagenes",
            icon: <CollectionsIcon />
        }
    }
];

export default appRoutes;