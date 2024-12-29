function locationfinder1(){
    train = 7
    return new Promise((resolve,reject) => {
    if(train==0){
        resolve("train arrived")
    }
    else{
        reject("no train")
    }
})
}


// locationfinder().then((resolveMes)=>{
//     console.log(resolveMes)
// }).catch(function rejectedMes(){
//     console.log(rejectedMes)
// })


////////////////////

function locationfinder2(){
    train = 7
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(train==0){
            resolve("train arrived")
        }
        else{
            reject("no train")
        }
    },2000)
})
}

// console.log(locationfinder())

//////
function locationfinder(){
    train = 7
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(train==0){
            resolve("train arrived")
        }
        else{
            reject("no train")
        }
    },2000)
})
}

// locationfinder().then((resolveMes)=>{
//     console.log(resolveMes)
// }).catch((rejectedMes)=>{
//     console.log(rejectedMes)
// })

///////////////////

function istimeconsumtion(t){
    time = 999;
    return time <= t;
}
function isValidLocation(loc){
    location = "Ooty";
    return location==loc
}
function locationfinder3(){
    loc = "Ooty";
    time=1000;
    return new Promise((locationTrue,Nolocation) => {
        setTimeout(()=>{
            if(isValidLocation(loc) && istimeconsumtion(time)){
                locationTrue("location found")
            }
            else{
                Nolocation("location No found")
            }
        },time)
    })
}
// locationfinder3().then((locationTrueMes)=>{
//     console.log(locationTrueMes)
// }).catch((NolocationMes)=>{
//     console.log(NolocationMes)
// })

//////////////////////////////////////////////////////////////////////////////
async function likeCode() {
    return new Promise((like) => {
        like("liked the post successfully")
    })
}

async function commentCode() {
    return new Promise((comment) => {
        comment("comment posted successfully in the post")
    })
}

async function createPost(){
    var post = new Promise((ispost) => {
        ispost("Post created successfully")
    })
    var [posts,comments,likes] = await Promise.all([post,commentCode(),likeCode()])
    console.log(post)
    console.log(comments)
    console.log(likes)

}

// createPost()

