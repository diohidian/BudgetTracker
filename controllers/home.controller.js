class HomeController {
    async home(req, res) {
        res.render("home")
    }
}

module.exports = HomeController