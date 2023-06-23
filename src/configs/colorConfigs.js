/*
    Este archivo contiene configuraciones de colores para componentes
    que se utilizan en el proyecto.
*/
import { colors } from "@mui/material"

const colorConfigs = {
    sidebar:{
        background: colors.blue[900],
        color: "#eeeeee",
        hoverBg: colors.blue[800],
        activeBg: "#1e253a"
    },
    topbar:{
        background: colors.blueGrey[900],
        color: "#eeeeee",
    },
    formCard: {
        background: colors.blue[700],
        fieldBg: colors.blue[200],
        color: "#eeeeee",
    },
    background: {
        main: colors.grey[100],
    }
}

export default colorConfigs;