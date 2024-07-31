import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  species: string;
  nameSurname: string;
  address: string;
  email: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, name, species, nameSurname, address, email}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="popup-content"
      overlayClassName="popup-overlay"
    >
      <h2>Uspešno poslato!</h2>
      <p><strong>Ime ljubimca:</strong> {name}</p>
      <p><strong>Vrsta:</strong> {species}</p>
      <p><strong>Ime i prezime:</strong> {nameSurname}</p>
      <p><strong>Adresa:</strong> {address}</p>
      <p><strong>E-mail adresa:</strong> {email}</p>
      <button className="popup-close" onClick={onClose}>Zatvori</button>
    </Modal>
  );
};

export default Popup;