import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import "../App.css"; // Make sure to import your CSS file for additional styles
import easeDine from "./images/dineease.png";
import electric from "./images/electronics.png";
import carFind from "./images/findcars.png";
import medicals from "./images/medicines.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="cards-container">
        <div className="card-row">
          <Card
            color="#90e0ef" // Sky Blue
            image={medicals}
            title="Medicines"
            description="Welcome to Heal Hub, where wellness meets convenience on your terms..."
            button={<button className="round-button">Visit Page</button>}
          >
          </Card>

          <Card
            color="#f4a261" // Light Lemon
            image={carFind}
            title="Find Cars"
            description="Autocrafters, where is Care. We take pride in delivering smooth care for your vehicle..."
            button={<button className="round-buttona">Visit Page</button>}
          >
          </Card>
        </div>

        <div className="card-row">
          <Card
            color="#ffe6a7" // Light Orange
            image={easeDine}
            title="Dine Ease"
            description="Dine Ease, ultimate and best destination, Ease brings you your favorite flavors..."
            button={<button className="round-buttonb">Visit Page</button>}
          >
          </Card>

          <Card
            color="#7ae582" // Light Yellow
            image={electric}
            title="Electronics"
            description="ElectroSwift brings you the latest gadgets at your fingertips, seamless tech experience."
            button={<button className="round-buttonc">Visit Page</button>}
          >
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
