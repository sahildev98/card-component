import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar.js";
import Card from "./card.js";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Card
          img="https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg"
          name="Harry Potter and the Goblet of Fire"
          author="Jk Rowling"
          publishDate="Made in year 2000"
        />
        <Card
          img="https://m.media-amazon.com/images/I/81RkTjE-tIL._SY466_.jpg"
          name="Percy Jackson and The Lightning Thief"
          author="Rick Riordan"
          publishDate="Made in year 2005"
        />
         <Card
          img="https://m.media-amazon.com/images/I/91ED1cwnc5L._SY466_.jpg"
          name="Percy Jackson and The Sea of Monsters"
          author="Rick Riordan"
          publishDate="Made in year 2006"
        /> <Card
          img="https://m.media-amazon.com/images/I/51o3Gno4PPL._SY445_SX342_.jpg"
          name="Percy Jackson and The Titan's Curse"
          author="Rick Riordan"
          publishDate="Made in year 2007"
        /> <Card
          img="https://m.media-amazon.com/images/I/61IixzhezrL._SY466_.jpg"
          name="The Hunger Games"
          author="Suzanne Collins"
          publishDate="Made in year 2008"
        /> <Card
          img="https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg"
          name="Harry Potter and the Goblet of Fire"
          author="Jk Rowling"
          publishDate="Made in year 2000"
        /> <Card
          img="https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg"
          name="Harry Potter and the Goblet of Fire"
          author="Jk Rowling"
          publishDate="Made in year 2000"
        /> <Card
          img="https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg"
          name="Harry Potter and the Goblet of Fire"
          author="Jk Rowling"
          publishDate="Made in year 2000"
        /> <Card
          img="https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg"
          name="Harry Potter and the Goblet of Fire"
          author="Jk Rowling"
          publishDate="Made in year 2000"
        /> <Card
          img="https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg"
          name="Harry Potter and the Goblet of Fire"
          author="Jk Rowling"
          publishDate="Made in year 2000"
        />
      </main>
    </>
  );
}

export default App;
