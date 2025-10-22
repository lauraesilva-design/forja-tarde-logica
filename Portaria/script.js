
function Check(){
    var wasBorn = parseFloat(document.getElementById("birth").value)
    var resp = document.getElementById("result")
    var clientAge = document.getElementById("age")

    if(isNaN(wasBorn)){
        resp.textContent="Type only numbers 🚫"
        resp.style.color="red"
        return
    }
    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn

    if(age >= 18){
        resp.textContent="Over 18, ENTRY ✅"
        clientAge.textContent = age
         document.getElementById("v1").style.display = "block"
        document.getElementById("v2").style.display = "none"

    }else{
        resp.textContent="Under 18, NOT ALLOWED 🔞"
        clientAge.textContent = age
        document.getElementById("v2").style.display = "block"
        document.getElementById("v1").style.display = "none"
    }
    
    
}

