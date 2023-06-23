/*
    Esta página contiene el formulario de inicio de sesión
    y la lógica para iniciar sesión.
    El formulario utiliza la librería react-hook-form para validar los campos.
    Al enviar el formulario se llama a la API para que verifique si el usuario existe.
    Si el usuario existe se guarda su perfil en el localStorage y se recarga la página.
    Si el usuario no existe se muestra un mensaje de error.
*/
import { React, Fragment } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    TextField,
    Button
} from '@mui/material'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify'

import { loginUser } from '../api/api'

import colorConfigs from '../configs/colorConfigs'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        loginUser(data).then(res => {
            if (Object.keys(res).length > 0) {
                localStorage.setItem('profile', JSON.stringify(res));
                window.location.reload();
                return
            }
            toast.error("Usuario o contraseña incorrectos");
        })
    }

    return (
        <Fragment>
            <ToastContainer />
            <Card>
                <CardHeader title="Iniciar Sesión" />
                <CardContent>
                    <form>
                        <TextField
                            style={{ margin: '1rem 0', color: colorConfigs.formCard.color }}
                            label="Email"
                            error={errors.email}
                            {...register("email", { required: true })}
                            fullWidth
                            type="email"
                        />
                        <TextField
                            style={{ margin: '1rem 0', color: colorConfigs.formCard.color }}
                            label="Password"
                            error={errors.password}
                            {...register("password", { required: true })}
                            fullWidth
                            type="password"
                        />
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            variant="outlined"
                            color="primary"
                            fullWidth
                        >
                            Log In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Fragment>
    );
};

export default Login;