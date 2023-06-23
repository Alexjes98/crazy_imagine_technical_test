import React from 'react';
import { Card, CardHeader, CardContent, TextField, Button } from '@mui/material'
import { useForm } from "react-hook-form"

import {loginUser} from '../api/api';

import colorConfigs from '../configs/colorConfigs';
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        loginUser(data).then(res => {
            if(Object.keys(res).length > 0){
                localStorage.setItem('profile', JSON.stringify(res));
                window.location.reload();
            }else{
                //TODO: Show error message
            }
        })
    }

    return (
        <Card >
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
    );
};

export default Login;