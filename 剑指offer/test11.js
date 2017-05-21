function Power(base, exponent)
{
    // write code here
    if(exponent==0)
        return 1;
    if(exponent==1)
        return base;
    var flag=0;
    var odd=false;
    if(exponent<0){
        flag=1;
        exponent=-1*exponent;
    }
    if(exponent%2==1){
        odd=true;
    }
    var result=base;

    for(var i=2;i<exponent;i+=2){
        result*=result;
    }
    if(odd==true)
        result*=base;
    if(flag==1)
        result=1/result;
    return result;
}
Power(2,-3);