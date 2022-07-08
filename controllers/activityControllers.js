const Activity = require('../models/activity');

const activitiesControllers = {
    getActivities: async (req,res) => {
        let activities;
        let error = null;
        try {
            activities = await Activity.find()
            .populate('itinerary');
        } catch(err) {
            error = err;
        };
        res.json({
            response: error ? 'ERROR' : { activities },
            success: error ? false : true,
            error: error
        })
    },

    getOneActivity: async (req,res) => {
        const id = req.params.id;
        let activity;
        let error = null;
        try {
            activity = await Activity.findOne({ _id:id });
        } catch(err) {
            error = err;
        };
        res.json({
            response: error ? 'ERROR' : activity,
            success: error ? false : true,
            error: error
        })
    },

    findActivityFromItinerary: async (req,res) => {
        let itineraryId = req.params.id;
        let activities;
        let error = null;
        try {
            activities = await Activity.find({ itinerary:itineraryId })
            .populate('itinerary')
        } catch(err) {
            error = err
        };
        res.json({
            response: error ? 'ERROR' : activities,
            success: error ? false : true,
            error: error
        })
    },

    addActivity: async (req,res) => {
        const { activityName, activityPhoto, itinerary } = req.body.data;
        let activity;
        let error;
        try {
            activity = await new Activity({
                activityName:activityName,
                activityPhoto:activityPhoto,
                itinerary:itinerary
            }).save();
        } catch(err) {
            error = err;
        };
        res.json({
            response: error ? 'ERROR' : {activity},
            success: error ? false : true,
            error: error
        })
    },

    modifyActivity: async (req,res) => {
        const id = req.params.id;
        const activity = req.body.data
        let activitydb;
        let error = null;
        try {
            activitydb = await Activity.findOneAndUpdate({ _id:id }, activity, { new:true })
        } catch(err) {
            error = err
        };
        res.json({
            response: error ? 'ERROR' : activitydb,
            succes: error ? false : true,
            error: error
        })
    },

    deleteActivity: async (req,res) => {
        const id = req.params.id;
        let activity;
        let error = null;
        try {
            activity = await getOneActivity.findOneAndDelete({ _id:id });
        } catch(err) {
            error = err
        };
        res.json({
            response: error ? 'ERROR' : activity,
            success: error ? false : true,
            error: error
        })
    }
}
module.exports = activitiesControllers