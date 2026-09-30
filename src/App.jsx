import Header from "./components/Header";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <main id="home">

        {/* Hero Section */}
        <section className="hero">

          <div className="container hero-content">

            <p className="hero-small-title">
              WELCOME TO PHOTO GALLERY
            </p>

            <h1>
              Explore Beautiful{" "}
              <span>Photos</span>
            </h1>

            <p>
              Discover a collection of 100 beautiful photos
              fetched dynamically using the JSONPlaceholder API.
            </p>

            <a href="#gallery" className="hero-button">
              Explore Gallery →
            </a>

          </div>

        </section>


        {/* Photo Gallery */}
        <PhotoGallery />


        {/* About */}
        <section className="about" id="about">

          <div className="container">

            <h2>
              About <span>This Gallery</span>
            </h2>

            <p>
              This photo gallery is built using React JS and Vite.
              Photos are dynamically fetched from the
              JSONPlaceholder API using the JavaScript fetch()
              method.
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;