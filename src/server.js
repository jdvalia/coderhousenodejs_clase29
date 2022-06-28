import express, { json, urlencoded } from 'express';
import session from 'express-session';
import DefaultRoutes from "./routes/default.js";
import PrincipalRoutes from './routes/principal.js'
import UsersRoutes from './routes/usuarios.js';
import ZapatillasRoutes from './routes/zapatillas.js';
import CarritosRoutes from './routes/carritos.js';
import InfoRoutes from './routes/info.js';
import RandomRoutes from './routes/random.js';
import passport from 'passport';
import { requiereAutenticacion } from "./controller/UsuariosController.js"

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(
    session({
        secret: 'secreto',
        resave: false,
        saveUninitialized: false,
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use('/', PrincipalRoutes)
app.use('/usuario', UsersRoutes)
app.use('/zapatilla', requiereAutenticacion, ZapatillasRoutes)
app.use('/carrito', requiereAutenticacion, CarritosRoutes)
app.use('/info', InfoRoutes)
app.use('/api/randoms', RandomRoutes)
app.use('/*', DefaultRoutes)

export default app
