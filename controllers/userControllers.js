const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');
const sendVerification = require('../controllers/sendVerification');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const usersControllers = {

    signUp: async (req,res) => {
        let { firstName, lastName, email, country, password, from, photo } = req.body.userData;
        try {
            const userExist = await User.findOne({ email });
            const passwordCrypt = bcryptjs.hashSync(password, 10);
            const verification = false;
            const uniqueString = crypto.randomBytes(15).toString('hex');
            if (userExist) {
                if(userExist.from.indexOf(from) !== -1){
                    res.json({
                        success: false,
                        from: from,
                        message: "You have already registered in this way, access with Sign in."
                    })
                } else {
                    userExist.verification = true;
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
                const newUser = await new User({
                    firstName,
                    lastName,
                    email,
                    country,
                    photo,
                    password: [passwordCrypt],
                    uniqueString: uniqueString,
                    verification,
                    from: [from]
                })
                if(from !== "form-signup"){
                    newUser.verification = true;
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Congratulations your user has been created with " + from + "."
                    })
                } else {
                    await sendVerification(email, uniqueString)
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We send an email to your mailbox to validate it, please check the mailbox to finish the registration."
                    })
                }
            }
        } catch(err) {
            res.json({ success: false, message: "Something went wrong, try again in a few minutes.", console: console.log(err) })
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
                } else if(userExist.verification) {
                    let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass));
                    if(from !== "form-signup") {
                        if(passwordMatch.length > 0) {
                            const userData = {
                                id: userExist._id,
                                firstName: userExist.firstName,
                                email: userExist.email,
                                photo: userExist.photo,
                                from: from
                            }
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60* 60*24})
                            await userExist.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { token, userData },
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
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60* 60*24})
                            await userExist.save()
                            res.json({
                                success: true,
                                from: from,
                                response: { token, userData },
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
                } else {
                    res.json({
                        success: false,
                        from: from,
                        message: "Email must be verified."
                    })
                }
            } catch(error) {
                res.json({
                    success: false,
                    message: "Something went wrong, try again in a few minutes.",
                    console: console.log(error)
                })

            }
        },

        verifyMail: async (req, res) => {
            const {string} = req.params
            const userExist = await User.findOne({uniqueString: string})
            //console.log(user)
            if (userExist) {
                userExist.verification = true
                await userExist.save()
                res.redirect("http://localhost:3000/")
            }
            else {res.json({
                success: false,
                message: `Email has not account yet!`})
            }
        },

        tokenVerification:(req, res) => {
            if(req.user){
            res.json({success:true,
                      response:{id:req.user.id, firstName:req.user.firstName, email:req.user.email, photo:req.user.photo, from:"token"},
                      message:"Welcome back "+ req.user.firstName + "."}),
                      console.log(res.json)
            }else{
                res.json({success:false,
                message:"Please make the Sign-In again signIn"}) 
            }
        }
    }

module.exports = usersControllers
