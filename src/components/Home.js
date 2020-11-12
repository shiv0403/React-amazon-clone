import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
          alt="background-img"
          className="home_image"
        />

        <div className="home_row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries"
            price={399}
            rating={3}
            img="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
          />
          <Product
            title="Kaizen: The Complete Guide to Implementing the Smart Concept of Continuous Improvement of All the Strategic Operations in the Development Process "
            price={1554}
            rating={4}
            img="https://m.media-amazon.com/images/I/61hTIPGN7-L._AC_UY218_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Zero to One: Notes on Start Ups, or How to Build the Future Paperback – 18 September"
            price={399}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/51JkDEpHUQL._SX317_BO1,204,203,200_.jpg"
          />
          <Product
            title="The Thought Leader Way: Leading Your Business with Thought Leadership in an Altered World Paperback – 1 October 2020"
            price={199}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/41o1Oy-qiLL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            title="Portraits of Power: Half a Century of Being at Ringside Hardcover – 19 October 2020"
            price={415}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/41a+W3AFhyL._SX360_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="The Diary of A Young Girl (Deluxe Hardbound Edition) Hardcover – 1 October 2018"
            price={379}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51T9UNSj0sL._SX321_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
