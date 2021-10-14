import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class IndexController {

    public async index({auth, request, response, view}: HttpContextContract) {

        let general = {
            categorias: await Database.from('productos_categorias').select('categoria').distinct()
        }
        for (let i = 0; i < general.categorias.length; i++) {
            general.categorias[i].subcategoria = await Database.from('productos_categorias').select('subcategoria').where('categoria',general.categorias[i].categoria)
        }

        return view.render('index/home',{general})
    }

    //politica_venta
    public async politicas_venta({auth, request, response, view}: HttpContextContract) {

        let general = {
            categorias: await Database.from('productos_categorias').select('categoria').distinct()
        }
        for (let i = 0; i < general.categorias.length; i++) {
            general.categorias[i].subcategoria = await Database.from('productos_categorias').select('subcategoria').where('categoria',general.categorias[i].categoria)
        }

        return view.render('index/politicas_venta',{general})
    }
    //garantia_devolucion
    public async garantia_devolucion({auth, request, response, view}: HttpContextContract) {

        let general = {
            categorias: await Database.from('productos_categorias').select('categoria').distinct()
        }
        for (let i = 0; i < general.categorias.length; i++) {
            general.categorias[i].subcategoria = await Database.from('productos_categorias').select('subcategoria').where('categoria',general.categorias[i].categoria)
        }

        return view.render('index/garantia_devolucion',{general})
    }

    public async login_form({auth, request, response, view}: HttpContextContract) {
        await auth.use('web').check()
        if (!auth.use('web').isLoggedIn) {
        return view.render('index/login')
        } else {
            response.redirect('/dashboard')
        }

    }

    public async login_post({auth, request, response, view}: HttpContextContract) {
        const username = request.input('username')
        const password = request.input('password');

        // Lookup user manually
        const user = await User
            .query()
            .where('username', username)
            .where('password', password)
            .first()

        if (user != null) {
            // Create session
            await auth.use('web').login(user)
        }

        response.redirect('/dashboard')
    }

    public async dashboard({auth, request, response, view}: HttpContextContract) {
        await auth.use('web').authenticate()
        // ✅ Request authenticated
        let general = {
            
        }
        console.info(auth.user?.$attributes.username)
        return view.render('index/dashboard',{general})
    }

    public async logout({auth, request, response, view}: HttpContextContract) {
        await auth.use('web').logout()
        response.redirect('/login')
    }
}
