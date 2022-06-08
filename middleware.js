const filter = (req,res,next)=>{

    if(!req.query.age) {
        res.send("Please provide age");
    }
    else if(req.query.age<18) {
        res.send("You can not access the application");
    } else {
        next();
    }
}

module.exports = filter;