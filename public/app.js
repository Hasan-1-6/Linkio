const formfield = document.getElementById('urlForm');
const anchortext = document.getElementById('anchorForLink')

formfield.addEventListener("submit", handleSubmit)

async function handleSubmit(event){
    
    event.preventDefault();
    let returnedObj;
    let fullUrl = event.target.elements.enteredUrl.value
    
    try{
            returnedObj = await fetch('https://linkio-sable.vercel.app/sendFullUrl',{
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
    const showLink = `https://linkio-sable.vercel.app/` + data.id;
    anchortext.innerHTML = showLink;
    anchortext.href = showLink
}
