// By: h01000110 (hi)
// github.com/h01000110

function numbers () {
	var fields = document.getElementsByTagName("code");
	for (field in fields) {
		var num = 0;
		var select = fields[field].innerText;
		var select_f = select.split(/\n/);
		var tab = document.createElement("table");

		// IF YOU USE MARKDOWN AND YOU HAVE BEEN GETTING ONE ADDITIONAL LINE IN YOUR TAG CODE
		// UNCOMMENT THE SECTION BELOW
		
		/* MARKDOWN SECTION /**/

		select_f.splice(-1, 1);

		/* END OF SECTION*/

		fields[field].innerHTML = "";
		fields[field].appendChild(tab);
		for (line in select_f) {
			var row = document.createElement("tr");
			var col = document.createElement("th");
			var colc = document.createElement("th");
			col.innerText = num + 1;
			colc.innerText = select_f[line];
			row.appendChild(col);
			row.appendChild(colc);
			tab.appendChild(row);
			num = num + 1;

			// STYLE SECTION - If you want, change it below

			col.style.textAlign = "right";
			colc.style.textAlign = "left";
			tab.style.border = "0";
			col.style.border = "0";
			colc.style.border = "0";
			col.style.padding = "3px";
			colc.style.padding = "3px";
			col.style.borderRight = "2px solid #777777";

			// END OF SECTION

		}
	}
}

window.onload = numbers();
