function HashMap(){
	var table=[];
	this.put=function(key,value){
		var position=loseloseHashCode(key);
		console.log(position+'-'+key);
		table[position]=value;
	}

}
var loseloseHashCode=function (key){
	var hash=0;
	for(var i=0;i<key.length;i++){
		hash+=key.charCodeAt(i);
	}
	return hash % 37;
};