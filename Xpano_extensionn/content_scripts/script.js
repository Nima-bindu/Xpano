
let BASE_URL = "http://127.0.0.1:5000"
let data = document.getElementsByTagName("body")[0].innerText

window.fetch(`${BASE_URL}/verify`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text:data })
}).then( async res => {
    const data = await res.json()
    console.log(data)
    if(data.success == "true") {
        if(data.result === 0) alert("The mail is not spam.")
        else alert("The mail is spam.")
    } else {
        alert('The mail is not spam')
    }
})