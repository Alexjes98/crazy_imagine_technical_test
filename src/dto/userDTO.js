/*
    Esta clase es un DTO de usuario.
    Se utiliza para enviar datos de usuario entre el cliente y el servidor.
*/
export default class userDTO {
    constructor({id, name, email, password, image_url}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.image_url = image_url;
    }
}


