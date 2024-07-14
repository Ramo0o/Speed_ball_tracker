
document.addEventListener("DOMContentLoaded", () => {
    fetch('https://speedballtracker-production.up.railway.app/api/get_numbers').then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response.json)
        return response.json();
    })
    .then(data => {
        for (i of data){
            const element = document.getElementById('div1');
            const header = document.createElement("h1");
            const para = document.createElement("p")
            const headerNode = document.createTextNode(`${i.firstName.toUpperCase()} ${i.lastName.toUpperCase()}`); 
            const paraNode = document.createTextNode(`Left :${i.left} Right :${i.right} Front: ${i.front} Back: ${i.back}  Time: ${i.duration}`);
            para.appendChild(paraNode);
            header.appendChild(headerNode); 
            element.appendChild(header);
            element.appendChild(para);
            
            console.log(i.firstName,i.lastName,i.right,i.left,i.front,i.back,i.duration)
        }
    })
    })
