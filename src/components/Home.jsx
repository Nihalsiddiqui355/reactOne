import React from "react";
import vg from "../assets/2.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Nihal</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>

      {/* Home 2 */}
      <div className="home2">
        <img src={vg} alt="Graphic" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, libero a doloribus delectus id voluptatibus quod minima
            necessitatibus animi doloremque?
          </p>
        </div>
      </div>

      {/* home 3 here */}

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur rem sequi repellat tenetur velit debitis quidem facilis
            laborum. Quae voluptate molestiae totam nihil mollitia, atque ullam
            in nemo sint cumque non cupiditate perspiciatis deleniti nisi
            accusantium eius pariatur dolor commodi, rem iure, itaque veritatis
            odit id provident. Fugit quidem laboriosam perspiciatis minima
            cupiditate nostrum sunt ducimus cum architecto voluptate.
            Necessitatibus natus, ut, fugit, vitae ipsa mollitia provident minus
            maxime eligendi nobis aut eum possimus? Quidem optio, magnam placeat
            tempora fugit consequuntur dolore. Iusto, sapiente? Expedita atque
            dolore ducimus veritatis, laudantium eveniet natus temporibus
            impedit accusamus voluptatibus quaerat odio minima quasi.
          </p>
        </div>
      </div>

      {/* Home4 */}
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article className="article"> 
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
