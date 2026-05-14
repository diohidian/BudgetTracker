class UserController {
    constructor() {

    }
    async index(req, res) {
        res.render("login")
    }

    async register(req, res) {
        res.render("register")
    }

    
}

module.exports = UserController