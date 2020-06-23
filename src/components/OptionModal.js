import React from 'react'
import Modal from 'react-modal';

const OptionModal = props => {
    const { selectedOption, closeModel } = props

    return (
        <Modal
            isOpen={ !! selectedOption }
            onRequestClose={ closeModel }
            contentLabel="Selected Option"
            >
            <h3>Selected Option</h3>
            <button onClick={ closeModel }>close</button>
            <p>{ selectedOption && <p>{ selectedOption }</p> }</p>
        </Modal>
    )
}

export default OptionModal
