import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class IndexController {

    public async index({auth, request, response, view}: HttpContextContract) {
        return view.render('index')

    }

    public async login_form({auth, request, response, view}: HttpContextContract) {
        await auth.use('web').check()
        let authenticate = auth.use('web').isLoggedIn
        if (!authenticate) {
        return view.render('login')
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
            .firstOrFail()
        // Create session
        await auth.use('web').login(user)

        response.redirect('/dashboard')
    }

    public async dashboard({auth, request, response, view}: HttpContextContract) {
        await auth.use('web').authenticate()

        // ✅ Request authenticated
       response.send(auth.user?.$extras.fullname)
    }

    public async logout({auth, request, response, view}: HttpContextContract) {
        await auth.use('web').logout()
        response.redirect('/login')
    }
}
