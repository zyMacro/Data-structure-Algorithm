// 一个数轴上共有N个点，第一个点的坐标是度度熊现在位置，第N-1个点是度度熊的家。现在他需要依次的从0号坐标走到N-1号坐标。
// 但是除了0号坐标和N-1号坐标，他可以在其余的N-2个坐标中选出一个点，并直接将这个点忽略掉，问度度熊回家至少走多少距离？ 
// 输入描述:

// 输入一个正整数N, N <= 50。

// 接下来N个整数表示坐标，正数表示X轴的正方向，负数表示X轴的负方向。绝对值小于等于100


// 输出描述:

// 输出一个整数表示度度熊最少需要走的距离。

// 输入例子:

// 4
// 1 4 -1 3

// 输出例子:

// 4
var readline=require('readline');
const rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
})
var countline=0;
rl.on('line',function(line){
	if(countline==0){
		var firstLine=line.split(' ');
		var nums=parseInt(firstLine[0]);
		countline++;
	}
	else{
		var secondLine=line.split(' ');
		var inputArray=[];
		secondLine.forEach(function(item,index,array){
			inputArray.push(parseInt(item));
		});
		var extrasDis=[-1];
		for(var i=1;i<inputArray.length-1;i++){
			if((inputArray[i]-inputArray[i-1])*(inputArray[i+1]-inputArray[i])>=0){ 
				extrasDis.push(0);
			}
			else
				extrasDis.push(Math.abs(inputArray[i]-inputArray[i-1])+Math.abs(inputArray[i+1]-inputArray[i])-Math.abs(inputArray[i+1]-inputArray[i-1]));
		}
		var index=extrasDis.indexOf(Math.max.apply(Math,extrasDis));
		inputArray.splice(index,1);
		var result=0;
		for(var i=1;i<inputArray.length;i++){
			result+=Math.abs(inputArray[i]-inputArray[i-1]);
		}
		console.log(result);
		countline=0;
	}
})
// inputArray=[1,4,1,-3];
// var sum=inputArray.reduce(callback);
// console.log(sum);
// function callback(acc,curV,curI,arr){
// 	acc+Math.abs(arr[curI+1]-arr[curI]);
// }