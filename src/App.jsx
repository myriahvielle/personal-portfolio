import "./App.css";
import { useEffect } from "react";
import initFtcoAnimate from "./ftco-animate";

function App() {
  useEffect(() => {
    // initialize ftco animations after components mount so elements exist
    try {
      initFtcoAnimate && initFtcoAnimate();
    } catch {
      // fail silently - animations are non-critical
    }
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Myriah<span>.</span>
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item">
                <a href="#home-section" className="nav-link">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-section" className="nav-link">
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#chapter-section" className="nav-link">
                  <span>Chapter</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects-section" className="nav-link">
                  <span>My Creations</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#author-section" className="nav-link">
                  <span>Owner</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact-section" className="nav-link">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="hero-wrap js-fullheight">
        <div className="overlay" />
        <div className="container-fluid px-0">
          <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
            <img
              className="one-third js-fullheight align-self-end order-md-last img-fluid"
              src="/assets/images/LVP-logo.JPG"
              alt=""
            />
            <div className="one-forth d-flex align-items-center ftco-animate js-fullheight">
              <div className="text mt-5">
                <span className="subheading">~ Bake for Life ~</span>
                <h1>La Vie Patisserie</h1>
                <p>
                  La Vie Patisserie, a charming homemade pastry bakery located in Plaridel, Bulacan, specializes in delectable cookies, customized cakes, brownies, and more. Our mission is to satisfy your cravings with every bite, infusing each creation with sweetness and passion. Discover a touch of decadence with our handcrafted delights. 
                </p>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    La Vie Patisserie 
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pb ftco-partner">
      </section>
      <section className="ftco-about img ftco-section" id="about-section">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay" />
                <div
                  className="img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: "url(/assets/images/Top-picture.jpg)" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4">The Person Behind the Pastries</h2>
                  <p>
                     Hi! I’m Myriah Vielle A. Silverio, an aspiring pastry chef and future pastry café owner. 
                     I’m the proud owner of La Vie Patisserie, a small homemade pastry business based in Plaridel, Bulacan. 
                      My bakery specializes in delectable cookies, customized cakes, brownies, and more, all lovingly made from scratch.
                      Baking is more than just a craft for me—it’s a heartfelt expression of creativity and care. 
                     I find joy in bringing people together through the comfort of good food and the sweetness of homemade pastries.
                      Each creation I make is a reflection of my dedication, passion, and desire to make every occasion a little more special.
                      Through La Vie Patisserie, I aspire to grow as a pastry chef and one day open my own pastry café where people can gather, 
                     relax, and share delightful moments over fresh, handcrafted desserts.
                  </p>
                  <div className="text-about">
                    <h4>Award achievements</h4>
                    <p>
                      🍴Food Safety and Sanitation Certification – Brazil (2019) <br />
                   🍴Inventory and Supply Chain Management Certification – Brazil (2020) <br />
                   🍴Assistant Pastry Chef – Florianópolis, Brazil (Apr 2019 – May 2021) <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
        id="section-counter"
      >
        <div className="container">
          <div className="row d-md-flex align-items-center align-items-stretch">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number" data-number={1100}>
                    32
                  </strong>
                  <span>Cakes Sold</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number" data-number={1200}>
                    29
                  </strong>
                  <span>Recipes Unlocked</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number" data-number={340}>
                    150
                  </strong>
                  <span>Cup Of Coffee</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 bg-light">
                <div className="text">
                  <strong className="number" data-number={12000}>
                    100
                  </strong>
                  <span>Satisfied Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section ftco-no-pb ftco-no-pt"
        id="chapter-section"
      >
        <div className="container">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h2 className="mb-4">A Little More About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <nav id="navi">
                <ul>
                  <li>
                    <a href="#page-2">Outside pastry life</a>
                  </li>
                  <li>
                    <a href="#page-3"> Educational Experience in IT Industry</a>
                  </li>
                  <li>
                    <a href="#page-4">Personal Interests</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-9">
              <div id="page-2" className="page bg-light two">
                <h2 className="heading">Outside Pastry Life</h2>
                <p>
                  When I’m not busy whisking batter or decorating cakes, you’ll often find me behind a screen — designing, coding, or exploring new technologies.<br /> 
                  As a BS Information Systems student, I’ve developed a strong interest in UI/UX design, front-end development, and business analysis.
                   I enjoy turning ideas into interactive experiences that are both functional and visually appealing.
                    My technical foundation includes working with HTML, CSS, and the Laravel framework, 
                    which I use to build and refine simple yet meaningful web projects.<br /> 
                  What excites me most is problem-solving through design and technology — understanding how users think,
                   finding what’s not working, and creating smart, user-centered solutions. 
                   I believe good design and clean code share the same goal: making life easier and more enjoyable.<br /> 
                  Beyond programming, I’m constantly learning — exploring new frameworks, improving my graphic design skills, 
                  and experimenting with how food and technology can intersect in creative ways.<br /> 
                </p>
              </div>
              <div id="page-3" className="page bg-light three">
                <h2 className="heading">Educational Experience in IT Industry</h2>
                <p>
                I once led a group project that highlighted my passion for Food Technology.
                Our team enhanced a website called Tastewise, integrating it into the medical field.
                This AI-powered tool was designed to provide personalized recipes for individuals with chronic illnesses who follow strict diets.
                We successfully defended this project and received excellent grades for our work.
                </p>
              </div>
              <div id="page-4" className="page bg-light four">
                <h2 className="heading">Personal Interests</h2>
                <p>
                 🍪  I am a pastry creator but I prefer savory food than sweet ones. <br />
                🚀   I’m currently exploring Artificial Intelligence and Data Science. <br />
                💕   I am so inlove with baking and food technology. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt">
        <div className="container">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-5 heading-section text-center ftco-animate">
              <h2 className="mb-4">Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 bg-light">
                <div className="desc">
                  <h3 className="mb-5">Cookies</h3>
                  <p>
                   Each cookie is freshly made, combining high-quality ingredients with homemade care — 
                   because every bite should taste like a little piece of happiness. 💛
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 bg-light">
              
                <div className="desc">
                  <h3 className="mb-5">Cakes</h3>
                  <p>
                    our cakes are crafted with passion and precision — soft, moist, and beautifully decorated for every occasion. From classic flavors to customized designs, each cake is made to celebrate life’s sweetest moments with a personal touch of homemade love. 💖
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <div className="services-1 bg-light">

                <div className="desc">
                  <h3 className="mb-5">Brownies</h3>
                  <p>
                    Indulge in the rich, chocolatey goodness of La Vie Patisserie’s brownies — perfectly fudgy, delightfully moist, and irresistibly satisfying. From classic favorites to creative twists topped with nuts, s’mores, or Biscoff, each bite is a decadent treat made to comfort and delight. 💕
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section testimony-section ftco-no-pb"
        id="testimonial-section"
      >
      </section>
      <section className="ftco-section ftco-project" id="projects-section">
        <div className="container">
          <div className="row no-gutters justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              
              <h2 className="mb-4">My Creations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-1.png)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Pinky Pearl-themed cake</a>
                  </h3>
                  <span>Chocolate with Vanilla Frosting </span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-2.png)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Golden Age</a>
                  </h3>
                  <span>Orange and Chocolate Flavored cake</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-3.png)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Mango Soleil Cake</a>
                  </h3>
                  <span>Mango Creme Cake</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-4.png)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Classic Swedish Princess Cake</a>
                  </h3>
                  <span>Vanilla Chiffon with Diplomat Cream</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-5.png)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Duo Crème Tropicale</a>
                  </h3>
                  <span>Avocado and Mango Fusion Cake</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-7.JPG)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Cookies and Cream</a>
                  </h3>
                  <span>Oreo-inspired cake</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-6.JPEG)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Classic Fudgey Brownies</a>
                  </h3>
                  <span>Best-seller</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="project img ftco-animate d-flex justify-content-center align-items-end"
                style={{ backgroundImage: "url(/assets/images/cake-5.JPEG)" }}
              >
                <div className="overlay" />
                <div className="text p-4">
                  <h3>
                    <a href="#">Royal Blue Pearls Cupcakes</a>
                  </h3>
                  <span>Very intricate!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
        id="author-section"
      >
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay" />
                <div
                  className="img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: "url(/assets/images/last-pic.jpg)" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="py-md-5 w-100 bg-light px-md-5">
                <div className="py-md-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ftco-animate">
                      <span className="subheading">
                        Know More About The Owner
                      </span>
                      <h2 className="mb-4">Myriah Vielle Silverio</h2>
                      <p>
                        An aspiring pastry chef with dreams of owning a café, and a side passion for uncovering insights through business analysis.
                      </p>
                      <ul className="about-info mt-4 px-md-0 px-2">
                        <li className="d-flex">
                          <span>Name:</span> <span>Myriah Vielle Silverio</span>
                        </li>
                        <li className="d-flex">
                          <span>Date of birth:</span>{" "}
                          <span>June 19, 2002</span>
                        </li>
                        <li className="d-flex">
                          <span>Address:</span>{" "}
                          <span>Plaridel, Bulacan</span>
                        </li>
                        <li className="d-flex">
                          <span>Email:</span>{" "}
                          <span>myriahvielle619@gmail.com</span>
                        </li>
                        <li className="d-flex">
                          <span>Phone: </span> <span>+63 9150985011</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="counter-wrap ftco-animate d-flex mt-md-3">
                    <div className="text">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section contact-section ftco-no-pb"
        id="contact-section"
      >
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Contact Me</h2>
            </div>
          </div>
          <div className="row d-flex contact-info mb-5">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker" />
                </div>
                <div>
                  <h3 className="mb-4">Address</h3>
                  <p>Plaridel, Bulacan</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone" />
                </div>
                <div>
                  <h3 className="mb-4">Contact Number</h3>
                  <p>
                    <a href="tel://1234567920">+63 9150985011</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane" />
                </div>
                <div>
                  <h3 className="mb-4">Email Address</h3>
                  <p>
                    <a href="mailto:info@yoursite.com">myriahvielle619@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 bg-light">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe" />
                </div>
                <div>
                  <h3 className="mb-4">Website</h3>
                  <p>
                    <a href="#">linkedin.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
    </>
  );
}

export default App;