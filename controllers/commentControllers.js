const Itinerary = require('../models/itinerary')

const commentControllers = {

    addComment: async (req, res) => {
        const {itinId,comments} = req.body
        const user = req.user._id
        try {
            const newComment = await Itinerary
                .findOneAndUpdate({_id:itinId}, {$push: {comments: comments}}, {new: true})
                .populate("comments.userId", {name:1, email:1, itineraryPhoto:1})
            res.json({success: true,
                response: {newComment},
                message: "Comment added successfuly"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "Something got wrong"})
        }
    },

    modifyComment: async (req, res) => {
        console.log(req.body)
        const {commentId,comments} = req.body
        const user = req.user._id
        try {
            const modifyComment = await Itinerary
            .findOneAndUpdate({"comments._id": commentId}, {$set: {"comments": comments}}, {new: true})
            res.json({
                        success: true,
                        response: {modifyComment},
                        message: "Comment modified successfully" 
                    })
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "Something got wrong" })
        }
    },

    deleteComment: async (req, res) => {
        const commentId = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itinerary
            .findOneAndUpdate({"comments._id": commentId}, {$pull: {comments: {_id: commentId}}}, {new: true})
            res.json({success: true,
                response: {deleteComment},
                message: "Comment deleted successfully"})
        }
        catch (error) {
            console.log(error)
            res.json({success: false,
                message: "Something got wrong"})
        }
    }
}

module.exports = commentControllers