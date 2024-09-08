import { useParams } from "react-router-dom";

function ImageDetail() {

    const { imageId } = useParams();

    const imagesOnStorageAsString = localStorage.getItem("images");

    const imagesOnStorage = JSON.parse(imagesOnStorageAsString ?? "{}")

    const image = (imagesOnStorage || []).find((img: any) => img.id === imageId);

    return (
        <img src={image.url} alt="alt" />
    );
}

export default ImageDetail;