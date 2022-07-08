const Itinerary = require('../models/itinerary');

const itinerariesControllers = {
    getItineraries: async (req,res) => {
        let itineraries;
        let error = null;
        try {
            itineraries = await Itinerary.find()
            .populate('city');
        } catch(err) {
            error = err;
        };
        res.json({
            response: error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })
    },

    getOneItinerary: async (req,res) => {
        const id = req.params.id;
        let itinerary;
        let error = null;
        try {
            itinerary = await Itinerary.findOne({ _id:id })
            .populate("comments.userId", {firstName:1, email:1, photo:1, country:1})
        } catch(err) {
            error = err;
        };
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    findItineraryFromCity: async (req,res) => {
        let cityId = req.params.id;
        let itineraries;
        let error = null;
        try {
            itineraries = await Itinerary.find({ city:cityId })
            .populate('city')
        } catch(err) {
            error = err
        };
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })
    },

    addItinerary: async (req,res) => {
        const { name, managerName, managerPhoto, price, duration, hashtags, likes, city, description, itineraryPhoto, comments } = req.body.data;
        let itinerary;
        let error;
        try {
            itinerary = await new Itinerary({
                name:name,
                managerName:managerName,
                managerPhoto:managerPhoto,
                price:price,
                duration:duration,
                hashtags:hashtags,
                likes:likes,
                city:city,
                description:description,
                itineraryPhoto:itineraryPhoto,
                comments:comments
            }).save();
        } catch(err) {
            error = err;
        };
        res.json({
            response: error ? 'ERROR' : {itinerary},
            success: error ? false : true,
            error: error
        })
    },

    modifyItinerary: async (req,res) => {
        const id = req.params.id;
        const itinerary = req.body.data
        let itinerarydb;
        let error = null;
        try {
            itinerarydb = await Itinerary.findOneAndUpdate({ _id:id }, itinerary, { new:true })
        } catch(err) {
            error = err
        };
        res.json({
            response: error ? 'ERROR' : itinerarydb,
            succes: error ? false : true,
            error: error
        })
    },

    deleteItinerary: async (req,res) => {
        const id = req.params.id;
        let itinerary;
        let error = null;
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id:id });
        } catch(err) {
            error = err
        };
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error: error
        })
    },

    likeDislike: async (req,res) => {
        //console.log(req)
        const id = req.params.id //parametro por ruta
        const user = req.user.id //parametro por passport
        console.log(user);
        console.log(id)

        let itinerary;
        try { 
            itinerary = await Itinerary.findOne({ _id:id }) 
            console.log(itinerary.likes)
            if (itinerary.likes.includes(user)) {
                Itinerary.findOneAndUpdate({ _id:id }, { $pull:{likes:user} }, { new:true })
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            } else {
                Itinerary.findOneAndUpdate({ _id:id }, { $push:{likes:user} }, { new:true })
                    .then(response => res.json({
                        response: response.likes, 
                        success: true
                    }))
                    .catch(error => console.log(error))
            }
        } catch (error) {
            res.json({
                response: error,
                success: false,
                console: console.log(error)
            })
        } 
    }
}
module.exports = itinerariesControllers