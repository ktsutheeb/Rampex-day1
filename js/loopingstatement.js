arr = [1,2,3,[1,2,3],'a','b',true]
console.log(arr)

function p(a){
    console.log(a);
}

// for in
// for (var a in arr) {
//     p(a)
// }

for ( var b of arr){
    p(b)
}