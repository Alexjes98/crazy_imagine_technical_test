# Prueba Técnica Crazy Imagine - Vite React

Esta es una aplicación de ejemplo creada con Vite y React, que utiliza JsonServer como base de datos para almacenar la información.

## Configuración

Antes de ejecutar la aplicación, asegúrate de seguir los siguientes pasos de configuración:

1. Crea un archivo `.env` en la raíz del proyecto.
2. Abre el archivo `.env` y define la variable de entorno `VITE_PHOTOS_API_KEY` con el siguiente valor:

   ```plaintext
   VITE_PHOTOS_API_KEY=XntubFls3jSSHAnK6jzsHfKogwc0eqPt5NdYXd1tCQLfodVdUQhGwlit

## Instalación

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta el comando 
```shell
    npm install
```

3. En caso de no tener instalado Json-server ejecutar el comando
```shell
    npm install -g json-server
```

## Ejecución 

1. Ejecuta el siguiente comando en una terminal:
```shell
    json-server --watch db.json --port 8000
```

2. En otra terminal, ejecuta el siguiente comando para iniciar la aplicación:
```shell
    npm run dev
```
Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador en la dirección http://localhost:3000.
