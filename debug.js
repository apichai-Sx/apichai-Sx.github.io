//host = "http://localhost:3000";
host = "https://www.apichaiclinic.net"
document.getElementById("debug").innerHTML = "debug"
inner = ["apichai","honda","wiraya","achita",""]
function repeat (){
	for (let i = 0; i < 5;i++) {
		setTimeout(()=>{
			document.getElementById("debug").innerHTML = inner[i]
			if (i >= 4)repeat ();
		},1000*i)
	}
}	
const Xrqust = () =>{
	let xhr = new XMLHttpRequest()
	xhr.onload = () =>{
		alert(xhr.responseText)
	}
	xhr.open("GET",host + "/gen-sx/")
	//xhr.setRequestHeader('Origin','https://apichai-sx.github.io')
	xhr.send()
}
repeat()
document.getElementById("rqstBtn").addEventListener("click",Xrqust)
document.getElementById("chkRld").innerHTML = "remove setting the header"
