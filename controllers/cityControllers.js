const City = require('../models/city'); //requiero el modelo que quiero controlar
//C: create=> post
//R:read=> get
//U:update=> put
//D:delete=> delete

const citiesControllers = {
    getCities: async (req, res) => { //creo el controlador para traer todas las ciudades
        let cities; //contiene las ciudades
        let error = null;
        try {
            cities = await City.find(); //cargo todas las ciudades creadas
        } catch(err) { error = err };
        res.json({
            response: error ? 'ERROR' : { cities },
            success: error ? false : true,
            error: error
        })
    },

    getOneCity: async (req, res) => {
        const id = req.params.id
        let city;
        let error = null;
        try {
            city = await City.findOne({ _id:id });
        } catch(err) { error = err };
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    },

    addCity: async (req, res) => { //crea el controlador
        const { name, country, image, description } = req.body.data //defino los requerimientos
        let city; //defino el nuevo modelo
        let error = null;
        try {
            city = await new City({
                name:name,
                country:country,
                image:image,
                description:description
            }).save() //guardo el nuevo modelo
        } catch(err) { error = err }
        res.json({ //lo transformo en json
            response: error ? 'ERROR' : city, //si hay error mandame 'ERROR sino pasame el modelo creado
            success: error ? false : true, //exito si hay error es falso, sino verdadero
            error: error //si no hay error es null sino (err) por el catcheo
        })
    },

    modifyCity: async (req, res) => {
        const id = req.params.id;
        const city = req.body.data;
        let citydb;
        let error = null;
        try {
            citydb = await City.findOneAndUpdate({ _id:id }, city, { new:true }) //atraves de los metodos haces una query: consulta a la base de datos
        } catch  (err) { error = err }
        res.json({
            response: error ? 'ERROR' : citydb,
            success: error ? false : true,
            error: error
        })
    },

    removeCity: async (req, res) => {
        const id = req.params.id;
        let city;
        let error = null;
        try {
            city = await City.findOneAndDelete({ _id:id })
        } catch (err) { error = err }
        res.json({
            response: error ? 'ERROR' : city,
            success: error ? false : true,
            error: error
        })
    }
}
module.exports = citiesControllers //exporto los controladores para requerirlos en las rutas