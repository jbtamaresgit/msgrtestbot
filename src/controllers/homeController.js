let homeRender = (req,res) => {
    return res.render("home.ejs");
}

module.exports = {
    getHomePage: homeRender
};