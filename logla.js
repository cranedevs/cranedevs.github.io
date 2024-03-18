const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
`
// save the html file
const blob = new Blob([html], {type: "text/html"})
const url = URL.createObjectURL(blob)
const a = document.createElement("a")
a.href = url
a.download = "index.html"
