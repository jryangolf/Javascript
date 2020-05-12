function linearsearch(value, list) {
	var found = false;
	var position = "not found";
	var index = 0;

	while(!found && index < list.length) 
	{
		if(list[index] == value) 
		{
			found = true;
			position = index;
		} 
		else 
		{
			index += 1;
		}				
	}
	
	return position;
}

function init() {
	var domlist = document.getElementById("list");
	if(domlist == null) {
		alert("error")
		return;
	}
	var domlis = domlist.children;
	var list = [];
	var i = 0

	while(i < domlis.length) {
		list.push(parseInt(domlis[i].innerText));

		i++
	}

	var result1 = linearsearch(3, list);
	if(result1 != "not found"){
		domlis[result1].style.backgroundColor = 'red';
	}
	
	alert(result1);

	var result2 = linearsearch(4, list);			
	alert(result2);
}

init();
