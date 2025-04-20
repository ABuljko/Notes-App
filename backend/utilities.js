const jwt= require('jsonwebtoken');

function authenticateToken(req,res,next){
    const autoHeader= req.headers['authorization'];
    const token= autoHeader && autoHeader.split(' ')[1];

    if(!token) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) return res.sendStatus(401);
        req.user= user;
        next();
    });
};

module.exports= {
    authenticateToken
};