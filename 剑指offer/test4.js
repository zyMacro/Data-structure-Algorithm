function replaceSpace(str)
{
    // write code here
    reg=/\s/g;
    var str_=str.replace(reg,'%20');
    return str_;
}
module.exports = {
    replaceSpace : replaceSpace
};