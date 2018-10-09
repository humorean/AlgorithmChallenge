// Reverse a string

module.exports = function(str){
    var r = str.split('');
    r = r.reverse();
    return r.join('');
}