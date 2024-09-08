import { ImageModel } from "../models/image";
import Image from "./Image";

interface Props {
    images: ImageModel[];
    handleImageClick: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
}

function ImageList({ images, handleImageClick }: Props) {
    return (
        <div className="image-list">
            {images.map(image => (
                <Image key={image.id} id={image.id} url={image.url} isFavorite={image.isFavorite} handleImageClick={handleImageClick} />
            ))}
        </div>
    );
}

export default ImageList;