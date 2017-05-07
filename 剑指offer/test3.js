var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
countline=0;
var found=new Boolean(false);
rl.on('line',function(line){
	if(countline==0){
		first_line=line.split(' ');
		rows=first_line[0];
		// columns=first_line[1];
		value=first_line[1];
		matrix=new Array(rows);
		countline++;
	}
	else if(countline<=rows){
		line_=line.split(' ');
		matrix[countline-1]=[];
		for(var i=0;i<line_.length;i++){
			matrix[countline-1].push(line_[i]);
		}
		countline++;
		if(countline>rows){
		var i=0;
		console.log(matrix[0]);
		var j=matrix[0].length-1;
		console.log('length:'+j);
		while(i<matrix.length && j>=0){
			console.log(j);
			if(matrix[i][j]<value){
				i++;
			}
			else if(matrix[i][j]==value){
				// console.log('true');
				found=true;
				break;
			}
			else{
				j--;
			}
		}
		console.log(found);
		return found;
		countline=0;
	}
	}
})

//nowcoder :


// function Find(target, array)
// {
//     // write code here
//     var found=false;
//     var i=0;
//     var j=array[0].length;
//     while(i<array.length && j>=0){
//         if(array[i][j]<target){
//          i++;   
//         }
//         else if(array[i][j]==target){
//             found=true;
//          break;   
//         }
//         else{
//          j--;   
//         }
//     }
//     console.log(found);
//     return found;
// }
// array1=[[1,2,5,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
// target=5;
// Find(target,array1);
// module.exports = {
//     Find : Find
// };