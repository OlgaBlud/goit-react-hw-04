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
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, imgUrl, imgAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      //   className={css.modal}
      //   overlayClassName={css.modalOverlay}
      style={
        (customStyles,
        {
          overlay: {
            backgroundColor: "rgba(19, 19, 19, 0.5)",
          },
        })
      }
    >
      {/* <button type="btn" onClick={() => closeModal()}>
        Close
      </button> */}
      <img className={css.imageModal} src={imgUrl} alt={imgAlt} />
    </Modal>
  );
};

export default ImageModal;
