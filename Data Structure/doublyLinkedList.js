//双向链表和普通链表的区别在于,在链表中一个节点只有链向下一个节点的链接,而在双向链表中,链接是双向的:一个链向下一个元素,一个链向上一个元素
function DoublyLinkedList(){
	var Node=function(element){
		this.element=element;
		this.next=null;
		this.prev=null;
	};
	var length=0;
	var head=null;
	var tail=null;

	this.insert=function(position,element){   
		if(position>=0 && position<=length){   //检查越界值
			var node=new Node(element);
			var current=head;
			var previous,index=0;
			if(position==0){                   //先判断三种特殊情况,插入到链表头(如果链表为空,或者不为空),链表尾
				if(!head){
					head=node;
					tail=node;
				}
				else{
					node.next=current;
					current.prev=node;
					head=node;
				}
			}else if(position===length){
				current=tail;
				current.next=node;
				node.prev=current;
				tail=node;
			}else{
				while(index++<position){
					previous=current;
					current=current.next;
				}
				node.next=current;
				previous.next=node;

				current.prev=node;
				node.prev=previous;
			}
			length++;
			return true;
		}else{
			return false;
		}
	}

}