const UserService = require("../services/user-services")

class UserController {
    constructor() {
        this.userService = new UserService()
        this.index = this.index.bind(this)
        this.register = this.register.bind(this)
        this.store = this.store.bind(this)
        this.storeLogin = this.storeLogin.bind(this)
    }

    // this method for GET login and register page
    async index(req, res) {
        res.render("login", {
            title: "Login",
            error: null
        })
    }

    async register(req, res) {
        res.render("register", {
            title: "Register",
            error: null
        })
    }

    // this method for POST register and login
    async store(req, res) {
        const { name, email, password } = req.body

        try {
            await this.userService.storeRegistration({ name, email, password })
            return res.redirect("/")
        } catch (error) {
            return res.render("register", {
                title: "Register",
                error: error.message || "Gagal mendaftar"
            })
        }
    }

    async storeLogin(req, res) {
        const { email, password } = req.body

        if (!email || !password) {
            return res.render("login", {
                title: "Login",
            })
        }

        try {
            const user = await this.userService.storeLogin({ email, password });
            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            return res.redirect("/home")
        } catch (error) {
            return res.render("login", {
                title: "Login",
                error: error.message || "Gagal login"
            })
        }
    }

    

}

module.exports = UserController