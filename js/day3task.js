async function sharedCode(sbool) {
    return new Promise((shared,unshared)=>{
        (sbool==true)?shared("shared the post"):unshared("deleted the shared in the post")
    })
}


async function commentCode(cbool) {
    return new Promise((commented,uncommented)=>{
        (cbool==true)?commented("commented the post"):uncommented("deleted the comment in the post")
    })
}


async function postCreate(bool) {
    var posts = new Promise((posted,unposted) => {
        if(true==bool){
            posted("Post created")
        }
        else{
            unposted("Post deleted")
        }
    })
    var [post,comment,share]= await Promise.all([posts,commentCode(true),sharedCode(true)])
    console.log(post)
    console.log(comment)
    console.log(share)

}

postCreate(true).then((a)=>{
    console.log(a);
}).catch((unpostedMes) => {
    console.log(unpostedMes)
})