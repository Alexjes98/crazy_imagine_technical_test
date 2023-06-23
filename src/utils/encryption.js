
/*
  Este archivo contiene funciones que se utilizan para aplicar encriptación a los datos
  Tiene una función para generar un id aleatorio que se utiliza al crear usuarios nuevos
*/

import { v4 as uuidv4 } from 'uuid';
export function generateRandomId() {
  const randomId = uuidv4();
  return randomId;
}