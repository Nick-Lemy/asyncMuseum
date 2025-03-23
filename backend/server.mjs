import express from 'express'
const app = express()

// Middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get('/', (req, res)=>{
    res.render('')
})

app.get("/exhibits", (req, res) => {
    const exhibits = [
      { id: 1, name: "Mona Lisa", description: "Leonardo da Vinci masterpiece" },
      { id: 2, name: "Starry Night", description: "Van Gogh painting" },
    ];
  
    res.render("index", { exhibits });
  });
app.listen(3612, ()=>{
    console.log('http://localhost:3612')
})
