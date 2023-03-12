import format from 'date-fns/format';
var span = document.querySelector('#time-now');

async function loadPyodide() {
	console.log("try load pyodide")
	const pyodide_pkg = await import("pyodide/pyodide.js");
	const pyodide = await pyodide_pkg.loadPyodide({
		indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
	});

	pyodide.runPython(`
		import js
		div = js.document.createElement("div")
		div.innerHTML = "<h1>Hello Pyodide! This element was created from Python</h1>"
		js.document.body.prepend(div)
	`);
}

loadPyodide()

export default function update() {
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
}
