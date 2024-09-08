import { Link } from "react-router-dom";

interface Props {
    id: string
    url: string;
    isFavorite: boolean;
    handleImageClick: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
}

function Image({ id, url, isFavorite, handleImageClick }: Props) {
    return (
        <Link to={`/image-details/${id}`} className="image">
            <img
                src={url}
                alt="alt"
            />

            <i className={isFavorite ? "fas fa-heart fa-3x" : "far fa-heart fa-3x"} onClick={(e) => handleImageClick(e, id)}></i>
        </Link>
    );
}

export default Image;