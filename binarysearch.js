function binarysearch() {
    
}



function init(){
    var domlist = document.getElementById("list");
        if(domlist == null) {
            alert("error")
                return;
    }
    var domlis = domlist.children;
    var list = [];

for (i = 0; i < domlis.length; i++ ) {
    list.push(parseInt(domlis[i].innerText));

    }
var result1 = binarysearch(3, list);
    if (result1 != "not found") {
        domlis[result1].style.backgroundColor = 'green';
    }


var result2 = binarysearch(4, list);
    if (result2 != "not found") {
        domlis[result2].style.backgroundColor = 'black';
    }
}
init();