function Fibonacci(n)
{
    // write code here
    var result=[0,1];
    if(n<2)
        return result[n];
    for(var i=2;i<=n;i++){
     result[i]=result[i-1]+result[i-2];
        
    }
    return result[n];
}
module.exports = {
    Fibonacci : Fibonacci
};



function jumpFloorII(number)
{
    // write code here
    var result=[0,1];
    var sum=1;
    
    for(var i=2;i<=number;i++){
     result[i]=1+sum;
        sum+=result[i];
        
    }
    return result[number];
}
module.exports = {
    jumpFloorII : jumpFloorII
};


function rectCover(number)
{
    // write code here
    var result=[0,1,2];
    if(number<3){
     return result[number];   
    }
    for(var i=3;i<=number;i++){
     result[i]=result[i-1]+result[i-2];   
    }
    return result[number];
}
module.exports = {
    rectCover : rectCover
};