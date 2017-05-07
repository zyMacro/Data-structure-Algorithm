//优先队列.实现一个优先队列,有两种选项:(其实就是在入列的时候区别处理,或者在出列的时候区别处理)
// 1.设置优先级,然后在正确的位置添加元素；
// 2.用入列操作添加元素,然后按照优先级移除它们
function PriorityQueue(){
	var items=[];
	function QueueElement(element,priority){
		this.element=element;
		this.priority=priority;
	}
	this.enqueue=function(element,priority){
		var queueElement=new QueueElement(element,priority);
		if(this.isEmpty()){
			items.push(queueElement);
		}else{
			var added=false;
			for(var i=0;i<items.length;i++){
				if(queueElement.priority<items[i].priority){
					items.splice(i,0,queueElement);
					added=true;
					break;
				}
			}
			if(!added){
				items.push(queueElement);
			}
		}
	}
}