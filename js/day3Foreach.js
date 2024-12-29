array = [1,2,3,"A","b",["kec","ai"],"3",true,20.5]
p = (x,...c) => { console.log(x,...c)}

// array.forEach(element => {
//     p(element)
// });

// array.forEach((ele,index) =>{
//     p(ele," ",index)
// })

//object

obj = {"a":1 , "b":2, "c":3}
// p(obj["a"])
// p(obj.a)

// obj.forEach((key,element) => {
//     p(element)
// });

// for (var elem in obj){
//     p(elem , " ", obj[elem])
// }

// for (var e in obj){
//     p(obj[e])
// }

// for (var {k,e} of obj){
//     p(obj[e])
// }


Object.keys (obj).forEach( k => {
    p(k);
    //p(obj[k])
})

for(var j of Object.keys(obj)){
    p(j," ",obj[j])
}