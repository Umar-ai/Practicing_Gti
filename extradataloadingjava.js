function customercheck() {
    const xhttp = new XMLHttpRequest();
    linkcuscheckview = `https://oracleapex.com/ords/faizan05/hr/faizancustomers/${document.getElementById("i1").value}`;
    console.log(document.getElementById("i1").value);
    xhttp.open("GET", linkcuscheckview, true);
    xhttp.send();
    xhttp.onload = ()=> {
        if (xhttp.status === 200) {
            const response = JSON.parse(xhttp.response);
            console.log(response);
            document.getElementById("s1").innerHTML = `
                    <h3>Customer Details</h3>
                    <p><b>Customer ID:</b> ${response.customerid}</p>
                    <p><b>Customer Name:</b> ${response.customername}</p>
                    <p><b>Contact Name:</b> ${response.contactname}</p>
                    <p><b>Address:</b> ${response.address}</p>
                    <p><b>City:</b> ${response.city}</p>
                    <p><b>Postal Code:</b> ${response.postalcode}</p>
                    <p><b>Country:</b> ${response.country}</p>
                `;
        }
        else {
            // Handle Error
        }
    }

}