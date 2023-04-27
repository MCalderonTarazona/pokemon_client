const {User} = require("../db");

const login = async (req, res) => {  
    try {
        const {email, password} = req.query;
        if (email && password) {
            const emailFind = await User.findOne({ where: { email: email } });
                if (!emailFind) {
                    res.status(404).send("Usuario no encontrado");
                } else {
                    const passFind = await User.findOne({ where: { email: email, password: password } });
                    if (!passFind) {
                        res.status(404).send("Contraseña incorrecta"); 
                    } else {
                        res.status(200).json({access: true})
                    }
                }   
        } else {
            res.status(404).send("Faltan datos para la validación");
        }
        
    } catch (error) {
        res.status(500).json({access: false})
    }
}

module.exports = login;