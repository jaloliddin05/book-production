const home = require("./model")

module.exports = (req, res) => {

  const { access_token } = req.cookies;

  if (access_token) {
    jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
    if(decode.role == 'admin'){
      return res.redirect('/admin')
    }else{
      const allCategories = await home.getAllCategories();

      const allBooks = await home.getAllBooks();

      const currentUser = await home.getCurrentUser(decode.user_id);

     return res.render("home",{allBooks,allCategories,currentUser});
    }
    });
  } else {
   return res.redirect("/register")
  }
};
