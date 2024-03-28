function validarUsuario(req, res) {
  'use strict';
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