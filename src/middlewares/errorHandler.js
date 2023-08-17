export default (error, req, res, next)=>{
    console.log(error)
    return res.status(500).json({
        succes:false,
        message:error.message
    })
}