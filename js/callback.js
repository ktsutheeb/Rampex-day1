function summitform(formmgs,dms){
    setTimeout ( () => {
        dms()
        console.log(formmgs)
    },2000)
}

function databaseSharing(){
    console.log("data stored successfully")
}

summitform("form summited successfully",databaseSharing)