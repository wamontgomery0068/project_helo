// Information Functionality

function getInformation(req, res){
    const db = req.app.get('db')
    db.get_information()
    .then(inform => res.json(inform))
    .catch(err => console.log(err))
}

module.exports = {
    getInformation
}