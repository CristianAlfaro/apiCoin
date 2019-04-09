const mongoose =  require('mongoose');

let PostModel = new mongoose.Schema({
    moneda: {
        type: String,
        unique: true,
        index: true
    },
    pais: String,
    anio: String,
    vigencia: String
});

module.exports = mongoose.model('Post', PostModel);