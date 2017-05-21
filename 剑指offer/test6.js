 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if((pre.length==0)||(vin.length==0)){
       return null;
    }
    var root=pre[0];
    var binaryTree=new TreeNode(root);
    var index=vin.indexOf(root);
    var preLeft=pre.slice(1,index+1);
    var preRight=pre.slice(index+1);
    var vinLeft=vin.slice(0,index);
    var vinRight=vin.slice(index+1);
    
    binaryTree.left=reConstructBinaryTree(preLeft,vinLeft);
    binaryTree.right=reConstructBinaryTree(preRight,vinRight);
    
    return binaryTree;
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};