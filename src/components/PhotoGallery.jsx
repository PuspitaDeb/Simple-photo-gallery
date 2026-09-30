import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

function PhotoGallery() {

  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchPhotos = async () => {

      try {

        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = await response.json();

        // Only first 100 photos
        setPhotos(data.slice(0, 100));

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }
    };

    fetchPhotos();

  }, []);

  // Search and album filter
  const filteredPhotos = photos.filter((photo) => {

    const matchesSearch = photo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesAlbum =
      selectedAlbum === "all" ||
      photo.albumId === Number(selectedAlbum);

    return matchesSearch && matchesAlbum;
  });

  return (
    <section className="gallery-section" id="gallery">

      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <p>EXPLORE OUR COLLECTION</p>

          <h2>
            Beautiful <span>Photo Gallery</span>
          </h2>

          <div className="heading-line"></div>

          <p className="section-description">
            Browse through 100 photos fetched from
            JSONPlaceholder API.
          </p>

        </div>


        {/* Search and Filter */}
        <div className="filter-container">

          <div className="search-box">

            <input
              type="text"
              placeholder="Search photo title..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

          </div>


          <div className="album-filter">

            <select
              value={selectedAlbum}
              onChange={(event) =>
                setSelectedAlbum(event.target.value)
              }
            >

              <option value="all">
                All Albums
              </option>

              <option value="1">Album 1</option>
              <option value="2">Album 2</option>
              <option value="3">Album 3</option>
              <option value="4">Album 4</option>
              <option value="5">Album 5</option>
              <option value="6">Album 6</option>
              <option value="7">Album 7</option>
              <option value="8">Album 8</option>
              <option value="9">Album 9</option>
              <option value="10">Album 10</option>

            </select>

          </div>

        </div>


        {/* Loading */}
        {loading && (
          <div className="status-message">
            <div className="spinner"></div>
            <p>Loading photos...</p>
          </div>
        )}


        {/* Error */}
        {error && (
          <div className="status-message error">
            <p>{error}</p>
          </div>
        )}


        {/* Photo Grid */}
        {!loading && !error && (

          <>

            <div className="gallery-count">

              <p>
                Showing{" "}
                <strong>{filteredPhotos.length}</strong>{" "}
                photos
              </p>

            </div>


            <div className="photo-grid">

              {filteredPhotos.map((photo) => (

                <PhotoCard
                  key={photo.id}
                  photo={photo}
                />

              ))}

            </div>


            {/* No result */}
            {filteredPhotos.length === 0 && (

              <div className="no-result">

                <h3>No Photos Found</h3>

                <p>
                  Try another search keyword or album.
                </p>

              </div>

            )}

          </>

        )}

      </div>

    </section>
  );
}

export default PhotoGallery;