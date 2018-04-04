let head = new Header();
head.append("Content-Type", "text/plain")

let req = new Request("http://localhost:3000", {
  method: "GET"
  ,header: head
  ,mode: "cors"
});

fetch(req).then(response => {
  document.querySelector(".").innerHTML =  response
});

