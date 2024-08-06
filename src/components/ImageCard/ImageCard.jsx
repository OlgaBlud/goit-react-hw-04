const ImageCard = ({ description, small }) => {
  return (
    <div>
      <img src={small} alt={description} width="100" />
    </div>
  );
};

export default ImageCard;
