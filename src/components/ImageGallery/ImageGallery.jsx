import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  console.log("first", images);
  console.log(images[0].urls.small);
  //   console.log("regular", images.urls.regular);
  return (
    <ul className={css.imageList}>
      {images.map(({ id, description, urls: { small } }) => {
        return (
          <li key={id} className={css.imageItem}>
            <ImageCard
              small={small}
              //   regular={regular}
              description={description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
