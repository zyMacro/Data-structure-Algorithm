function LinkedList(){
	var Node=function(element){
		this.element=element;
		this.next=null;
	};
	var length=0;
	var head=null;
	this.append=function(element){
		var node=new Node(element);
		var current;
		if(head===null){
			head=node;
		}
		else{
			current=head;
			while(current.next){
				current=current.next;
			}
			current.next=node;
		}
		length++;
	}
	this.print=function(){
		console.log(length);
	}

	// this.append=function(element){};
	this.insert=function(position,element){};
	this.removeAt=function(position){};
	this.indexOf=function(element){};
	this.isEmpty=function(){};
	this.size=function(){};
	this.toString=function(){};
	// this.print=function(){};


}
var list=new LinkedList();
list.append(10);
list.append(20);
list.print();






















// this.append=function(element){
// 	var node=new Node(element);
// 	var current;
// 	if(head === null){
// 		head=node;
// 	}
// 	else{
// 		current=head;
// 		while(current.next){
// 			current=current.next;
// 		}
// 		current.next=node;
// 	}
// 	length++;
// };
// this.removeAt=function(position){
// 	if(position>-1 && position<length){

// 	}
// }