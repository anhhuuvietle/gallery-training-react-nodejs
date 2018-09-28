const jwt = require('jsonwebtoken');

module.exports = {
    login: async (req, res) => {
        const { user } = req.body;
        if (user.username === "lehuuvietanh" && user.password === "anhhvle") {
            try {
                const token = await jwt.sign({ username: "lehuuvietanh" }, "anhhuuvietle");
                res.json({ token });
            }
            catch(e) {
                res.sendStatus(500);
            }

        }
        else res.sendStatus(403);
    },
    verify: async (req, res, next) => {
        const token = req.headers.token;
        try {
            await jwt.verify(token, 'anhhuuvietle');
            next();
        }
        catch(e) {
            res.sendStatus(403);
        }
    },
    authen: (req, res) => {
        res.sendStatus(200);
    }
}