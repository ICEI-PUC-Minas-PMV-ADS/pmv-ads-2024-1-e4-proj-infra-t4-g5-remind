function validarUsuario(req, res) {

    if(userExists){
        res.status(400).json('Usuario ja existe')
      }

    // if () {
    //     return res.status(400).json({ mensagem: 'nome e obrigatorio' });
    // }
}

module.exports = {
    validarUsuario,
  };