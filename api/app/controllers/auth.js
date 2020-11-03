const axios = require("axios");
const error = require("debug")("api:error");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");
const salt = 10;

// slack signup
exports.exchangeCode_slack = async(req, res) => {
    // pull the code out of the body
    const { code, url } = req.body;
    try {
        // make a request to slack for the access_token
        const { data } = await axios.get("https://slack.com/api/oauth.access", {
            params: {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.SECRET,
                redirect_uri: url,
                code,
            },
        });
        console.log("api/controllers/auth.js – exchangeCode_slack() – data", data);
        const [user] = await Users.upsert({
            email: data.user.email,
            access_token: data.access_token,
            name: data.user.name,
            type: "slack",
        }, { returning: true });
        const token = jwt.sign({ id: user.id }, process.env.SECRET);
        res.json({ token, loggedIn: true });
    } catch (e) {
        // log the error
        error(e);
        // send an unauthorized response if something above fails to work.
        res.status(401).json({ loggedIn: false });
    }
};

// in-app signup
exports.signup = async(req, res) => {
    console.log("api/controllers/auth.js – signup()");
    // needs to be let
    let { username, password } = req.body;
    try {
        console.log("password before hash – ", password);
        password = await bcrypt.hash(password, salt);
        // username = username.toLowerCase();
        console.log("password after hash – ", password);
        const type = "regular";
        const user = await Users.create({
            username,
            password,
            type,
        });
        console.log("api/controllers/auth.js – signup() – users ", user);
        const token = jwt.sign({ id: user.id }, process.env.SECRET);
        console.log("api/controllers/auth.js – signup() – token ", token);
        res.json({ token, loggedIn: true });
    } catch (e) {
        console.log("api/controllers/auth.js – signup() – !error");
        error(e);
        const errors = e.errors.map((err) => err.message);
        res.status(401).json({ errors, loggedIn: false });
    }
};

exports.login = async(req, res) => {
    console.log("api/controllers/auth.js – !");
    const { username, password } = req.body;
    console.log("api/controllers/auth.js – ", username);
    // ! it works
    const [user] = await Users.findAll({ where: { username } });
    console.log("api/controllers/auth.js – auth() – ", user);
    if (!user) {
        console.log("api/controllers/auth.js – !user");
        res.status(403).json({ loggedIn: false });
        // res.redirect("/login");
        return;
    }
    bcrypt.compare(password, user.password).then((response) => {
        if (!response) {
            console.log("api/controllers/auth.js – bcrypt.compare – !response");
            res.status(403).json({ loggedIn: false });
            // res.redirect("/login");
            return;
        }
    });

    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    res.json({ token, loggedIn: true });
};