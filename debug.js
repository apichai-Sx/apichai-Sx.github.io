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
repeat()
