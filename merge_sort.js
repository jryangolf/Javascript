function merge_sort(array) {
    if (array.length < 2) {
        return array;
    }
    var length = array.length;
    var middle = Math.floor(length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    var mergeSortLeftResult = merge_sort(left);
    var mergeSortRightResult = merge_sort(right);
    var sortedArray = merge(mergeSortLeftResult, mergeSortRightResult);
    return sortedArray; 
}

function merge(left, right) {
    var results = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        }
        else {
            results.push(right.shift());
        }
    
    }
    results = results.concat(left, right);
    return results;
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
    return merge_sort(list);

}
var results = init();
