import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar.js";
import Card from "./components/card.js";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="row1">
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
        /> 
        </section>

        <section className="row2">
        <Card
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
          img="https://m.media-amazon.com/images/I/81jpeZERJiL._SL1500_.jpg"
          name="The Mice and Men"
          author="John Steinbeck"
          publishDate="Made in year 2017"
        /> 
        </section>
        <section className="row3">
        <Card
          img="https://m.media-amazon.com/images/I/81jOI26444L._SL1500_.jpg"
          name="The Green Mile"
          author="Stephen King"
          publishDate="Made in year 2008"
        /> <Card
          img="https://m.media-amazon.com/images/I/41LyJ9yocnL._SY445_SX342_.jpg"
          name="On Writing"
          author="Stephen King"
          publishDate="Made in year 2000"
        /> <Card
          img="https://m.media-amazon.com/images/I/81gepf1eMqL._SL1500_.jpg"
          name="To Kill a MockingBird"
          author="Harpher Lee"
          publishDate="Made in year 1960"
        /> <Card
          img="https://m.media-amazon.com/images/I/71+khXHbe5L._SL1500_.jpg"
          name="Gone Girl"
          author="Gillian Flynn"
          publishDate="Made in year 2012"
        />
        </section>
      </main>
    </>
  );
}

export default App;
