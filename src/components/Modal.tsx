import React from "react";

interface ModalProps {
    pokemon: any;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ pokemon, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-btn" onClick={closeModal}>Close</button>
                <h2>{pokemon.species}</h2>

            </div>
        </div>
    );
};

export default Modal;
