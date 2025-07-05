const formfield = document.getElementById('urlForm');
const anchortext = document.getElementById('anchorForLink')

formfield.addEventListener("submit", handleSubmit)

async function handleSubmit(event){
    
    event.preventDefault();
    let returnedObj;
    let fullUrl = event.target.elements.enteredUrl.value
    
    try{
            returnedObj = await fetch('http://localhost:3000/sendFullUrl',{
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                "fullUrl" : fullUrl
            })
          
        })
        if(!returnedObj.ok){
            const data = await returnedObj.json();
            alert(`Error :` + data.error)
            event.target.elements.enteredUrl.value = ""
            return;
        }
    }
    catch(err){
        alert(`Some error occured : ` + err);
        event.target.elements.enteredUrl.value = ""
        return;
    }
    const data = await returnedObj.json();
    const showLink = `http://localhost:3000/` + data.id;
    anchortext.innerHTML = showLink;
    anchortext.href = showLink
}