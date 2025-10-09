import "./Hero&Text.css";

interface HeroTextProps {
    image: string; // Percorso dell'immagine come stringa
    title?: string; // Opzionale
    text?: string; // Opzionale
    reverse?: boolean; // Opzionale
}

const HeroText: React.FC<HeroTextProps> = ({ 
    image, 
    title, 
    text, 
    reverse = false 
}) => {
    return (
        <div className={`container ${reverse ? 'reverse' : ''}`}>
            <div className="text-content">
                {title && <h2 className="title">{title}</h2>}
                <p className="description">
                    {text || "Testo predefinito..."}
                </p>
            </div>
            <div className="image-content">
                <img className="image" src={image} alt={title || "Immagine"} />
            </div>
        </div>
    );
};

export default HeroText;