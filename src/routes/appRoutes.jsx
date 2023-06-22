import CollectionsIcon from '@mui/icons-material/Collections';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Home } from '@mui/icons-material';

import Dashboard from '../pages/Dashboard';
import TipCalculator from '../pages/TipCalculator';
import ImageGallery from '../pages/ImageGallery';

const appRoutes = [
    {
        path: "/",
        index: true,
        element: <Dashboard />,
        roles: ["Admin", "User"],
        state: "home",
        sidebarProps: {
            displayText: "Home",
            icon: <Home />            
        }
    },
    {
        path: "/tip_calculator",
        index: true,
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
        index: true,
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