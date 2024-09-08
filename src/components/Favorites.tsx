import { ImageModel } from "../models/image";
import Image from "./Image";

interface Props {
    favImages: ImageModel[];
}

function Favorites({ favImages }: Props) {
    const handleFunc = (a: any, b: any) => { }

    return (
        <div className="image-list">
            {
                favImages.map(image => (
                    <Image key={image.id} url={image.url} id={image.id} isFavorite={image.isFavorite} handleImageClick={handleFunc} />
                ))
            }
        </div>
    );
}

export default Favorites;