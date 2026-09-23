//import http from "http";
import app from "./app.js";
const PORT = 3000;

const rotas = {
    "/":"curso de node.js",
    "/livros":"entrei na rota livros",
    "/autores":"entrei na rota autores"

}
    //const server = http.createServer((req,res )=>{
   // res.writeHead (200, {"Content-Type": "Text/plain"});
  //  res.end(rotas[req.url]);
 //})

app.listen(PORT, () => {
    console.log("servidor escutando");
});