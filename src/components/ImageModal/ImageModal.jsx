import Modal from "react-modal";
import css from "./ImageModal.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    padding: "0",
    height: "max-content",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, imgUrl, imgAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={
        (customStyles,
        {
          overlay: {
            backgroundColor: "rgba(19, 19, 19, 0.5)",
          },
          content: {
            padding: "0",
            height: "max-content",
          },
        })
      }
    >
      <img className={css.imageModal} src={imgUrl} alt={imgAlt} />
    </Modal>
  );
};

export default ImageModal;
