//循环队列()
function hotPotato(namelist,num){
	var queue=new Queue();
	for(var i=0;i<namelist.length;i++){
		queue.enqueue(namelist[i]);
	}
	var eliminated='';
	while(queue.size()>1){
		for(var i=0;i<num;i++){
			queue.enqueue(queue.dequeue());
		}
		eliminated=queue.dequeue();
		console.log(eliminated+'out');

	}
	return queue.dequeue();

}
var names=['John','Tom','Frank','Ingram'];
var winner=hotPotato(names,7);
console.log('winner:',winner);