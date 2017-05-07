// 度度熊有一个N个数的数组，他想将数组从大到小排好序，但是萌萌的度度熊只会下面这个操作：
// 任取数组中的一个数然后将它放置在数组的最后一个位置。
// 问最少操作多少次可以使得数组从小到大有序？ 
// 链接：https://www.nowcoder.com/questionTerminal/adc291e7e79f452c8b59243a5ce68d3a?orderByHotValue=1&questionTypes=000100
// 来源：牛客网

// 输入描述:
// 首先输入一个正整数N，接下来的一行输入N个整数。(N <= 50, 每个数的绝对值小于等于1000)


// 输出描述:
// 输出一个整数表示最少的操作次数。

// 输入例子:
// 4
// 19 7 8 25

// 输出例子:
// 2
var readline=require('readline');
const rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
var countline=0;
var num=1;
rl.on('line',function(line){
	if(countline==0){
		var firstLine=line.split(' ');
		numbers=parseInt(firstLine[0]);
		countline++;
	}
	else{
		var inputArray=line.split(' ');
		inputArray=inputArray.map(function(item,index,array){return parseInt(item);});
		iArray=inputArray.slice(0);
		var sortedArray=inputArray.sort(function compare(a,b){return a-b;});
		for(var i=0; i< sortedArray.length;i++){
			if(iArray.indexOf(sortedArray[i])<=iArray.indexOf(sortedArray[i+1])){
				num+=1;	
			}
			else{
				break;
			}		
		}
		console.log(numbers-num);
		num=1;
		countline=0;
	}
})
