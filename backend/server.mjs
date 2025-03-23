import express from "express";
const app = express();

// Middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
const exhibits = [
    {
      id: 1,
      name: "La Joconde",
      info: "Peinte entre 1503 et 1506 par Léonard de Vinci, La Joconde est l'un des portraits les plus célèbres au monde. Le sourire énigmatique de la femme représentée continue de fasciner les spectateurs. Le tableau est exposé au musée du Louvre à Paris.",
      auteur: "Léonard de Vinci",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
    },
    {
      id: 2,
      name: "Le Cri",
      info: "Créée en 1893 par Edvard Munch, cette œuvre exprime une profonde angoisse existentielle. La silhouette au premier plan, avec son visage déformé, incarne la détresse humaine face à un monde en mutation.",
      auteur: "Edvard Munch",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg",
    },
    {
      id: 3,
      name: "La Jeune Fille à la perle",
      info: "Peinte vers 1665 par Johannes Vermeer, cette œuvre est souvent surnommée la 'Mona Lisa du Nord'. Le regard captivant de la jeune fille, combiné à la lumière subtile, rend ce tableau inoubliable.",
      auteur: "Johannes Vermeer",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    },
    {
      id: 4,
      name: "La Persistance de la mémoire",
      info: "Réalisée en 1931 par Salvador Dalí, cette œuvre surréaliste célèbre montre des montres molles dans un paysage désertique. Elle reflète la fluidité et la relativité du temps.",
      auteur: "Salvador Dalí",
      image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    },
    {
      id: 5,
      name: "Guernica",
      info: "Peinte par Pablo Picasso en 1937, cette fresque monumentale dénonce les horreurs de la guerre, en particulier le bombardement de Guernica pendant la guerre civile espagnole.",
      auteur: "Pablo Picasso",
      image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
    },
    {
      id: 6,
      name: "Nymphéas",
      info: "Série emblématique de Claude Monet peinte entre 1897 et 1926, représentant les reflets changeants de la lumière sur un étang recouvert de nénuphars dans son jardin de Giverny.",
      auteur: "Claude Monet",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Claude_Monet_-_Water_Lilies.jpg",
    },
    {
      id: 7,
      name: "La Naissance de Vénus",
      info: "Chef-d'œuvre de Sandro Botticelli réalisé vers 1485, illustrant Vénus sortant des eaux sur un coquillage géant, entourée de personnages mythologiques dans un style raffiné.",
      auteur: "Sandro Botticelli",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Birth_of_Venus_Botticelli.jpg",
    },
    {
      id: 8,
      name: "Les Demoiselles d'Avignon",
      info: "Tableau révolutionnaire de 1907 signé Pablo Picasso. Il marque une rupture avec la peinture classique en introduisant des formes anguleuses et des visages inspirés de l'art africain.",
      auteur: "Pablo Picasso",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d5/Les_Demoiselles_d%27Avignon.jpg",
    },
    {
      id: 9,
      name: "La Liberté guidant le peuple",
      info: "Peinte par Eugène Delacroix en 1830, cette œuvre allégorique célèbre la Révolution de Juillet. La figure centrale, représentant la Liberté, brandit fièrement le drapeau tricolore français.",
      auteur: "Eugène Delacroix",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Eug%C3%A8ne_Delacroix_-_La_Libert%C3%A9_guidant_le_peuple.jpg",
    },
    {
      id: 10,
      name: "Le Baiser",
      info: "Créée en 1907-1908 par Gustav Klimt, cette toile célèbre l’amour et l’intimité. Les motifs dorés et les formes géométriques sont caractéristiques du mouvement Art Nouveau.",
      auteur: "Gustav Klimt",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    }
  ];
  

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/exhibits", (req, res) => {

  res.render("index", { exhibits });
});

app.get("/exhibits/:id", (req, res) => {
  const { id } = req.params;
  const oeuvre = exhibits[Number(id) - 1];
  res.render("oeuvre.ejs", { oeuvre });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
