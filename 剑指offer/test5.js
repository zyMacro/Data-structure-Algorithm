/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var current=head;
    var result=[];
    while(current){
     result.unshift(current.val);
        current=current.next;
      
    }
    return result;
    
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};