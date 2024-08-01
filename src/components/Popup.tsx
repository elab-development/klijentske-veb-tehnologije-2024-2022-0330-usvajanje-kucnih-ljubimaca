import React from 'react';
import Modal from 'react-modal';
import '../style/Popup.css'

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
      <h2 className='popup-heading'>Uspešno poslato!</h2>
      <p className='popup-text'><strong>Ime ljubimca:</strong> {name}</p>
      <p className='popup-text'><strong>Vrsta:</strong> {species}</p>
      <p className='popup-text'><strong>Ime i prezime:</strong> {nameSurname}</p>
      <p className='popup-text'><strong>Adresa:</strong> {address}</p>
      <p className='popup-text'><strong>E-mail adresa:</strong> {email}</p>
      <button className="popup-close" onClick={onClose}>Zatvori</button>
    </Modal>
  );
};

export default Popup;