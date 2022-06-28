import { Router } from 'express'
import passport from 'passport';
import { Strategy } from 'passport-local';
import * as userController from '../controller/UsuariosController.js'
import UsuariosApi from '../api/UsuariosApi.js'
const users = new UsuariosApi();

passport.use('registro', new Strategy({ passReqToCallback: true }, async (req, username, password, done) => {
    let usuario
    try {
        await users.obtenerUsuarioPorEmail(username)
        return done(null, false)
    } catch (error) {

    }
    try {
        const datosUsuario = req.body
        usuario = await users.crearUsuario(datosUsuario)
    } catch (error) {
        return done(error)
    }
    done(null, usuario)
}))
passport.use('login', new Strategy((username, password, done) => {
    let usuario
    try {
        usuario = users.obtenerUsuarioPorEmail(username)
    } catch (error) {
        return done(null, false)
    }
    if (usuario.password == password) {
        return done(null, false)
    }
    done(null, usuario)
}))
passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})
const UsersRoutes = new Router();

UsersRoutes.get('/', userController.obtenerUsuarios);
UsersRoutes.post('/registro', passport.authenticate('registro', {
    failureRedirect: '/usuario/failRegister',
    successRedirect: '/usuario/successRegister'
}));
UsersRoutes.get('/failRegister', userController.failRegister);
UsersRoutes.get('/successRegister', userController.successRegister);
UsersRoutes.post('/login', passport.authenticate('login', {
    failureRedirect: '/usuario/failLogin',
    successRedirect: '/usuario/successLogin'
}));
UsersRoutes.get('/failLogin', userController.failLogin);
UsersRoutes.get('/successLogin', userController.successLogin);
UsersRoutes.get('/logout', userController.logout);

export default UsersRoutes 