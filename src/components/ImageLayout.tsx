import "./css/Imagen.css"

function ImageLayout() {
    return (
      <div className="container">
        <div className="top-image">
        <img src="/images/Bed.jpeg" alt="Bed" />

        </div>
        <div className="bottom-images">
        <img src="/images/OIP.jpeg" alt="Front" />
        <img src="/images/Hotel.webp" alt="Hotel" />
        <img src="/images/Spa.jpg" alt="Spa" />
        </div>
      </div>
    );
  }
  
  export default ImageLayout;