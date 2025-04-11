// Regex Middleware for signup 
function MiddlewareFunc (req,res,next){
    const {Uname,Fname,mail,pass,agee,gen,Phnumber} = req.body;

    if(!Uname || !Fname || !mail || !pass || !agee || !gen || !Phnumber) {
        return res.status(404).json({message : 'Kindly fill all the details'});
    }

    if(agee < 15) {
        return res.status(403).json({message : 'you are under age'});
    }

    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!regex.test(mail)) {
        return res.status(402).json({message : 'invalid email'});
    }

    const regex2 = /^(?:\+92|0)[3-9][0-9]{9}$/;

    if(!regex2.test(Phnumber)) {
        return res.status(403).json({message : 'invalid phone number'});
    }

    next();
}

module.exports = MiddlewareFunc;