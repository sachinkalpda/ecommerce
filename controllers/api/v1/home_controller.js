module.exports.home = function(req,res) {
    return res.status(200).json({
        message : 'This is Homepage'
    });
}