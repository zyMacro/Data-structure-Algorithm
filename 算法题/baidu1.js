// 度度熊想去商场买一顶帽子，商场里有N顶帽子，有些帽子的价格可能相同。度度熊想买一顶价格第三便宜的帽子，问第三便宜的帽子价格是多少？ 
// 输入描述:
// 首先输入一个正整数N（N <= 50），接下来输入N个数表示每顶帽子的价格（价格均是正整数，且小于等于1000）


// 输出描述:
// 如果存在第三便宜的帽子，请输出这个价格是多少，否则输出-1

// 输入例子:
// 10
// 10 10 10 10 20 20 30 30 40 40

// 输出例子:
// 30
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       n = parseInt(line.trim())
       
   } else {
       // 矩阵数据读取
       var tokens = line.split(' ');
       var result=[];
       //tokens.sort((a,b)=>a-b);
        tokens.sort(function compare(a,b){return a-b});
       for(var j=0;j<tokens.length;j++){
           if (result.indexOf(tokens[j]) == -1) result.push(tokens[j]);
       }
       // 记录当前读取的行数
       cur_line += 1;
   }
    
          // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (1 === cur_line) {
       // 输出结果
       if(result.length>2){
           console.log(result[2]);
       }
       else{
           console.log(-1);
       }
       
       // 重新初始化相关变量
       n = -1;
       ans = 0;
       cur_line = 0;
   }
   
 
});