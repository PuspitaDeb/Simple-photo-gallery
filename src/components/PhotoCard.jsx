function PhotoCard({ photo }) {
  return (
    <div className="photo-card">

      <div className="image-container">
        <img
          src={photo.thumbnailUrl}
          alt={photo.title}
        />
      </div>

      <div className="photo-content">

        <div className="photo-info">
          <span className="photo-id">
            ID: {photo.id}
          </span>

          <span className="album-id">
            Album: {photo.albumId}
          </span>
        </div>

        <h3>{photo.title}</h3>

      </div>

    </div>
  );
}

export default PhotoCard;