
exports.moduleName = 'My Utility';

module.exports.getDatabaseUrl = function() {
    return 'http://localhost:2700/mongodb';
}

exports.getDate = function() {
    return new Date();
}

exports.getFullName = function(lastName, firstName) {
    return lastName +', '+ firstName;
}