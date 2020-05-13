function binarysearch(value, arr) {
    var high = list.length - 1;
    var low = 0;
    var mid = 0;
    for (i=0; low <= high; i++) {
        mid = math.floor((high + low) /2)
            if(arr[mid == value]{
                return arr[mid];
            }
            else if (value > arr[mid]){
                //move the low up one 
                low = mid + 1;
            }
            else {
                //move the high down to middle minus 1 and search the left half
                high = mid -1;
            }
    }
    return "not found"
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