const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const usersControllers = {

    signUp: async (req,res) => {
        let { firstName, lastName, email, country, password, from, photo } = req.body.userData;
        try {
            const userRegistered = await User.findOne({ email })
            if(userRegistered) {
                if(userRegistered.from.indexOf(from) !== -1) {
                    res.json({
                        success:false,
                        from: "signup",
                        message: "You have already registered in this way, access with Sign in."
                    })
                } else {
                    const cryptPassword = bcryptjs.hashSync(password, 10);
                    userRegistered.from.push(from);
                    userRegistered.password.push(cryptPassword);
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We add " + from + " to log in."
                    })
                }
            } else {
                const cryptPassword = bcryptjs(password, 10);
                const newUser = await new User ({
                    firstName,
                    lastName,
                    email,
                    country,
                    photo,
                    password: [cryptPassword],
                    from: [from]
                })
                if(from !== "form-SignUp") {
                    await newUser.save();
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Congratulations your user has been created with " + from + " ."
                    })
                } else {
                    await newUser.save();
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We send an email to your mailbox to validate it, please check the mailbox to finish the registration."
                    })
                }
            }
        } catch(err) {
            res.json({ success: false, message: "Something went wrong, try again in a few minutes." })
        }
}

}
module.exports = usersControllers