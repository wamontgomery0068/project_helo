// Information Functionality

function getInformation(req, res){
    const db = req.app.get('db')
    console.log('req.query', req.query)
    db.get_information([req.query.id])
    .then(inform => res.json(inform))
    .catch(err => console.log(err))
}

function deleteInformation(req, res){
    const db = req.app.get('db')
    console.log(+req.params.id)
    db.delete_information(req.params.id)
    .then(response => res.json(response))
    .catch(error_in_backend => console.log(error_in_backend))
};

module.exports = {
    getInformation,
    deleteInformation
}