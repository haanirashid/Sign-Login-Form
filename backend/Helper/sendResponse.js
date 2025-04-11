function sendResponse(res,status,dataa,err,msg){
    res.status(status).json({
        error : err,
        data : dataa,
        message : msg
    })
}

module.exports = sendResponse;
