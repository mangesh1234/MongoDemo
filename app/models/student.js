var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StudentSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('student', StudentSchema);