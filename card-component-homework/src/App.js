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
      </main>
    </>
  );
}

export default App;
