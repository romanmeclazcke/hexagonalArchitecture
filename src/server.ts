import { app } from "./app";

const port =3000;

const bootstrap = () => {
    try {
        app.listen(port, () => {
            console.log(`Servidor en ejecución en el puerto ${port}`);
        });
        } catch (err) {
        console.log(err);
    }
}

bootstrap();