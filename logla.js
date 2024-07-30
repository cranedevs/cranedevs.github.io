alert(1);
const blob = new Blob([html], {type: "text/html"})
const url = URL.createObjectURL(blob)
const a = document.createElement("a")
a.href = url
a.download = "index.html"
