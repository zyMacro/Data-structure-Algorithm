function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length==0){
     return 0;   
    }

    var left=0;
    var right=rotateArray.length-1;
    if(rotateArray[left]<rotateArray[right])
        return rotateArray[left];
    var mid=Math.floor(rotateArray.length/2);
    if(rotateArray[left]==rotateArray[right]&& rotateArray[left]==rotateArray[mid]){
        return MinInOrder(rotateArray,left,right);
    }
       
    while(right-left>1){
        if(rotateArray[mid]>=rotateArray[right]){
         left=mid;
            
        }
        else{
          right=mid;
            
        }
        mid=Math.floor((left+right)/2);
    }
    return rotateArray[right];
    
}
function MinInOrder(rotateArray,left,right){
    var min=rotateArray[left];
    for(var i=left+1;i<=right;i++){
        if(min>rotateArray[i])
            min=rotateArray[i];
    }
    return min;
}


var rotateArray=[1,1,1,0,1];
minNumberInRotateArray(rotateArray);