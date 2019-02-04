const bcrypt = require("bcryptjs");

const login = (req, res) => {
    const db = req.app.get("db");
    db.get_user({username: req.body.username})
    .then(async users => {
        if (!users.length){
            res.status(401).json({error: "User Not Found"})
        } else {
            const isMatch = await bcrypt.compare(req.body.password, users[0].password)
            if (isMatch) {
                req.session.user = {username: users[0].username}
                res.json({username: users[0].username});
            } else {
                res.status(401).json({error: "Incorrect password"});
            }
        }
    });
};

const register = async (req, res) => {
    const db = req.app.get("db");
    const hash = await bcrypt.hash(req.body.password, 10);

    try {
        const response = await db.new_user({
            username: req.body.username,
            password: hash,
        });
        res.json({ username: response[0].username });
    } catch (e) {
        console.log(e);

        res.status(401).json("An error occured on the back-end.");
    };
};

const user = (req, res) => {
    if(req.session.user){
        console.log(user)
        res.json(req.session.user)
    } else {
        res.status(401).json({error: "Please login"})
    };
};

module.exports = {
    login,
    register,
    user
}