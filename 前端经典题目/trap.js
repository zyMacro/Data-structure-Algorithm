// //ex1
// (function(){
// 	var a=b=3;
// })();
// console.log(a);     //reference error
// console.log(b);     //3
//如果一个变量没有定义就调用的话,会reference error，如果定义了但没有赋值,则会undefined

//ex2
// var a=[1,2,3,4];  //每隔一秒console一个a钟的元素
// for(var j = 0; j < 4; j++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(a[i]);  
//         }, (i + 1) * 1000);
//     })(j);
// }

//纠错
// for (var j = 0; j < 4; ++j) {
//     setTimeout(function() {
//         (function(i) {
//             console.log(a[i]);
//         })(j);
//     },1000);
// }

//ex3  about this(一)
// function juggle(){
//       var result=0;
//       for(var n=0;n<arguments.length;n++){
//          result+=arguments[n];
//       }
//       console.log(this);
//       this.result=result;
// }
// console.log(result);
// var ninja1 = {};
// var ninja2 = {};
// juggle.apply(ninja1,[1,2,3,4]);
// juggle.call(ninja2,5,6,7,8);
// console.log(ninja1.result === 10,"juggled via apply");
// console.log(ninja2.result === 26,"juggled via call");

//ex4 about this(二)
// function a() {
//    function b() {
//       console.log(this);   //window
//    }
//    b();
// }
// a();

//ex5
// var a = "Hello";
// function b() {
//     console.log(a); //undefined
//     var a = "World";  //因为变量声明会提升，所以第一次a是undefined,只声明没有赋值，第二次为world
//     console.log(a);  //world
// }
// b();