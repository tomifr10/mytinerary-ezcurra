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
            itinerary = await Itinerary.findOne({ _id:id });
        } catch(err) {
            error = err;
        };
        res.jason({
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
        const { name, managerName, managerPhoto, price, duration, hashtags, likes, city } = req.body.data;
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
                city:city
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
    }
}
module.exports = itinerariesControllers