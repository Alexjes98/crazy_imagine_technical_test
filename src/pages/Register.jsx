import { Fragment } from 'react'
import { Typography, Box, Pagination, TextField, Button, ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme } from '@mui/material'
import { Card, CardHeader, CardContent } from '@mui/material'
import { useForm } from "react-hook-form"

import userDTO from '../dto/userDTO'
import { generateRandomId } from '../utils/encryption'
import { registerUser } from '../api/api'

import colorConfigs from '../configs/colorConfigs';

const Register = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const id = generateRandomId();
        console.log(id);
        const newUser = new userDTO(id, data.name, data.lastname, data.email, data.password);
        registerUser(newUser).then((data) => {
            console.log(data);
        })
    }
    //TODO poner un toast de exito de operación
    //TODO  poner el textField para la URL de la imagen

    return (
        <Fragment>
            <Card style={{ }}>
                <CardHeader title="Registrarse" />
                <CardContent>
                    <form>
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            type="text"
                            error={errors.name}
                            {...register("name", { required: true })}
                            style={{ margin: '1rem 0', color: colorConfigs.formCard.color }}
                        />
                        {errors.name && <span>Este campo es requerido</span>}
                        <TextField
                            label="Apellido"
                            variant="outlined"
                            fullWidth
                            type="text"
                            error={errors.lastname}
                            {...register("lastname", { required: true })}
                            style={{ margin: '1rem 0' }}
                        />
                        {errors.lastname && <span>Este campo es requerido</span>}
                        <TextField
                            label="Correo electrónico"
                            variant="outlined"
                            fullWidth
                            type="email"
                            error={errors.email}
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            helperText={errors.email?.type === 'pattern' && 'Correo no válido'}
                            style={{ margin: '1rem 0' }}
                        />
                        {errors.email && <span>Este campo es requerido</span>}
                        <TextField
                            label="Contraseña"
                            variant="outlined"
                            fullWidth
                            type="password"
                            error={errors.password}
                            {...register("password", { required: true })}
                            style={{ margin: '1rem 0' }}
                        />
                    </form>
                    <Button onClick={handleSubmit(onSubmit)}>
                        Registrarse
                    </Button>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default Register