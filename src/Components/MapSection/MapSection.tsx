import "./MapSection.css"; 

const MapSection = () => {
  return (
    <div className="map-container">
      <h2 className="map-title">Dove Siamo</h2>
      <p className="map-address">
        Torrino Sporting Center<br />
        Via Deserto del Gobi, 44, 00144
      </p>

      <div className="map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.068081591941!2d12.4320735763521!3d41.80529376996915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325f4ad842db49f%3A0x39481a8ca2e677c0!2sTorrino%20Sporting%20Center-Centro%20Sportivo!5e0!3m2!1sit!2sit!4v1760623436513!5m2!1sit!2sit"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
