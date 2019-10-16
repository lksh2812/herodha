console.log("Hello");
window.onload = () =>{
    // let currentTime = Date(Date.now()),
    let currentTime = new Date(),
        currentTimeDom = document.querySelector("#current-time");
        if(currentTimeDom){
            let month = new Array();
                month[0] = "Jan";
                month[1] = "Feb";
                month[2] = "Mar";
                month[3] = "Apr";
                month[4] = "May"
                month[5] = "Jun";
                month[6] = "Jul";
                month[7] = "Aug";
                month[8] = "Sep";
                month[9] = "Oct";
                month[10] = "Nov";
                month[11] = "Dec";
            currentTimeDom.innerText = `${month[currentTime.getMonth()]} ${currentTime.getDate()} ${currentTime.getHours()}:${currentTime.getMinutes()}`
        }else{
            console.log("Cannot find it")
        }
}
