function merge_sort(array) {
    var sorted_arr = [];
    if (array.length < 2) {
        return array;
    }
        var length = array.length;
        var middle = Math.floor(length / 2);
        var left = array.slice(0, middle);
        var right = array.slice(middle);

        return merge_sort(merge_sort(left), merge_sort(right));
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
        results.concat(left, right);
    }
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
init();
