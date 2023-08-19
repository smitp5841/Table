document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value
    let number = document.getElementById("number").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let exp = document.getElementById("exp").value

    let user = {
        name: name,
        number: number,
        email: email,
        password: password,
        exp: exp,
    }

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = user.name

    let td2 = document.createElement("td")
    td2.innerHTML = user.number

    let td3 = document.createElement("td")
    td3.innerHTML = user.email

    let td4 = document.createElement("td")
    td4.innerHTML = user.password

    let td5 = document.createElement("td")
    td5.innerHTML = user.exp

    let td6 = document.createElement("td")
    if (user.exp > 5) {
        td6.innerHTML = "senior"
    }
    else {
        td6.innerHTML = "junior"
    }

    let td7 = document.createElement("td")
    td7.innerHTML = "delete"

    tr.append(td1, td2, td3, td4, td5, td6, td7)
    document.getElementById("tbody").append(tr)
    td7.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });


})

document.getElementById("dlt").addEventListener("click", () => {
    document.getElementById("tbody").innerHTML = ""
})