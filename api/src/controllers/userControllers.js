const {User} = require("../db");
const {Role} = require("../db");

const createUser = async (req, res) => {
    try {
        const {name, email, password } = req.body;
        if( !name || !email || !password ){
            return res.status(404).send('Faltan datos para el registro');
        }

        const [newUser, created] = await User.findOrCreate({
            where: { name, email, password },
        });

        if (!created){ res.status(404).send('El usuario ya existe');
        }else{
            await newUser.setRole(2);
            res.status(200).send('El usuario se ha creado con exito');  
        }
        
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}


module.exports = createUser;