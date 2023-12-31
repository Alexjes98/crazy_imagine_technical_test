/*
    Esta página contiene el formulario de registro de usuarios
    y la lógica para registrar un nuevo usuario.
    El formulario utiliza la librería react-hook-form para validar los campos.
    Al enviar el formulario se crea un nuevo objeto userDTO con los datos del formulario
    y se envía a la API para que lo registre.
    Si el registro es exitoso se muestra un mensaje de éxito.
    Si el registro falla se muestra un mensaje de error.
*/
import { Fragment } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    Button,
    TextField
} from '@mui/material'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import userDTO from '../dto/userDTO'
import { generateRandomId } from '../utils/encryption'
import { registerUser } from '../api/api'

const Register = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const id = generateRandomId();
        const newUser = new userDTO({ ...data, id: id });
        registerUser(newUser).then((data) => {
            if (Object.keys(data).length === 0) {
                return toast.error("Error al registrar usuario");
            }
            toast.success("Usuario registrado con éxito");
        })
    }
    return (
        <Fragment>
            <ToastContainer />
            <Card style={{}}>
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
                            sx={{ margin: '1rem 0' }}
                        />
                        {errors.name && <span>Este campo es requerido</span>}
                        <TextField
                            label="Apellido"
                            variant="outlined"
                            fullWidth
                            type="text"
                            error={errors.lastname}
                            {...register("lastname", { required: true })}
                            sx={{ margin: '1rem 0' }}
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
                            sx={{ margin: '1rem 0' }}
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
                        {errors.password && <span>Este campo es requerido</span>}
                        <TextField
                            label="URL de la imagen"
                            variant="outlined"
                            fullWidth
                            type="text"
                            error={errors.image}
                            {...register("image_url",)}
                            sx={{ margin: '1rem 0' }}
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