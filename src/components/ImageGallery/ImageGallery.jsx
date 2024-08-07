import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  //   console.log("first", images);
  //   console.log(images[0].urls.small);
  //   console.log("regular", images.urls.regular);
  return (
    <ul className={css.imageList}>
      {images.map(({ id, description, urls: { small, regular } }) => {
        return (
          <li key={id} className={css.imageItem}>
            <ImageCard
              small={small}
              regular={regular}
              description={description}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
