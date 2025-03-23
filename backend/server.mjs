import express from 'express'
const app = express()

// Middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get('/', (req, res)=>{
    res.render('home')
})

app.get("/exhibits", (req, res) => {
    const exhibits = [
        { id: 1, name: "La Joconde", info: "Portrait de la Renaissance", auteur: "Léonard de Vinci", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg" },
        { id: 3, name: "Le Cri", info: "Chef-d'œuvre expressionniste", auteur: "Edvard Munch", image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg" },
        { id: 4, name: "La Jeune Fille à la perle", info: "Art de l'Âge d'or néerlandais", auteur: "Johannes Vermeer", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg" },
        { id: 5, name: "La Persistance de la mémoire", info: "Montres molles surréalistes", auteur: "Salvador Dalí", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg" },
        { id: 7, name: "Guernica", info: "Mural anti-guerre", auteur: "Pablo Picasso", image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg" },
      ];
  
    res.render("index", { exhibits });
  });
app.listen(3612, ()=>{
    console.log('http://localhost:3612')
})
