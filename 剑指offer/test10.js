function NumberOf1(n)
{
    // write code here
    var count=0
    while(n){
     count++;
        n=(n-1)&n;
    }
    return count;
}
module.exports = {
    NumberOf1 : NumberOf1
};