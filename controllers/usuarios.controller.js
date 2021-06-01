const { response } = require("express");

const usuariosGet = ( req, res= response)=>{
    const params = req.query;
    const {nombre, edad} = req.body;

    res.json({
        msg:' Api Get Usuarios - Controlador',
        nombre,
        edad,params
    })
  
}
const usuariosPost = ( req, res= response)=>{
    res.json({
        msg:' Api Post Usuarios - Controlador'
    })
  
}
const usuariosPut = ( req, res= response)=>{
    const id = req.params.id; 
    res.json({
        msg:' Api Put Usuarios - Controlador',
        id
    })
}
const usuariosDelete = ( req, res= response)=>{
    res.json({
        msg:' Api Delete Usuarios - Controlador'
    })
}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
}