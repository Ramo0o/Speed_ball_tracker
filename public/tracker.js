
document.addEventListener("DOMContentLoaded", () => {
    submit.addEventListener("click",() => {
        //turn them into objects 
        let firstName = document.getElementById("first_name").value.trim().toLowerCase();
        let lastName = document.getElementById("last_name").value.trim().toLowerCase();
        let right = document.getElementById("right").value;
        let left = document.getElementById("left").value;
        let front = document.getElementById("front").value;
        let back = document.getElementById("back").value;
        let time = document.getElementById("time").value;
        console.log(firstName,lastName,right,left,front,back,time)

        fetch("https://speedballtracker-production.up.railway.app/api/insert_user",{
            method:"POST",
            body: JSON.stringify({
                firstName : firstName,
                lastName : lastName,
                right :right,
                left: left,
                front: front,
                back: back,
                time: time
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
clearElements(document.getElementsByClassName('text_field'))
    })
})
function clearElements(args){
    for(let i in args){
    args[i].value = "";
    }
}
