const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const usersControllers = {

    signUp: async (req,res) => {
        let { firstName, lastName, email, country, password, from, photo } = req.body.userData;
        try {
            const userExist = await User.findOne({ email })
            if (userExist) {
                if(userExist.from.indexOf(from) !== -1){
                    res.json({
                        success: false,
                        from: from,
                        message: "You have already registered in this way, access with Sign in."
                    })
                } else {
                    const passwordCrypt = bcryptjs.hashSync(password, 10)
    
                    userExist.from.push(from)
                    userExist.password.push(passwordCrypt)
                    await userExist.save()
                    res.json({
                        success: true,
                        from: from,
                        message: "We add " + from + " to log in."
                    })
                }
            } else {
                const passwordCrypt = bcryptjs.hashSync(password, 10)
                const newUser = await new User({
                    firstName,
                    lastName,
                    email,
                    country,
                    photo,
                    password: [passwordCrypt],
                    from: [from]
                })
                if(from !== "form-signup"){
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Congratulations your user has been created with " + from + "."
                    })
                } else {
                    await newUser.save()
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
        },

        signIn: async(req,res) => {
            const { email, password, from } = req.body.logedUser;
            try {
                const userExist = await User.findOne({ email });
                // const indexpass = userExist.from.indexOf(from);
                if(!userExist) {
                    res.json({
                        success: false,
                        message: "Your user has not been registered, perform the Sign-up."
                    })
                } else {
                    let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass));
                    if(from !== "form-signup") {
                        if(passwordMatch.length > 0) {
                            const userData = {
                                id: userExist._id,
                                firstName: userExist.firstName,
                                email: userExist.email,
                                from: from
                            }
                            await userExist.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { userData },
                                message: "Welcome back " + userData.firstName + "."
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: "There is no registration with " + from + ", if you want to registered with this method do the sign-up with " + from + "."
                            })
                        }
                    } else {
                        if(passwordMatch.length > 0) {
                            const userData = {
                                id: userExist._id,
                                firstName: userExist.firstName,
                                email: userExist.email,
                                from: from
                            }
                            await userExist.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { userData },
                                message: "Welcome back " + userData.firstName + "."
                            })
                        } else {
                            res.json({
                                success: false,
                                from: from,
                                message: "Email or password do not matchup."
                            })
                        }
                    }
                }
            } catch(error) {
                res.json({
                    success: false,
                    message: "Something went wrong, try again in a few minutes.",
                    console: console.log(error)
                })

            }
        }
    }


module.exports = usersControllers
