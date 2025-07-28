import Modal from "./Modal.jsx";
import React, { useState } from "react";
import "./ModalTest.css"; // Import the CSS file

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);
    const [bodyContent, setBodyContent] = useState("This is a custom modal popup component. You can customize the content as needed.");
    const [footerContent, setFooterContent] = useState("Footer");
    const [headerContent, setHeaderContent] = useState("Header");
    const [inputText, setInputText] = useState("");
    
    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    }
    
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }
    
    const handleCloseModal = () => {
        setShowModalPopup(false);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setBodyContent(inputText);
        setInputText("");
    };
    
    return (
        <div className="modal-test-container">
            <button 
                onClick={handleToggleModalPopup}
                className="btn-primary"
            >
                Open Modal Popup
            </button>
            
            {showModalPopup && (
                <Modal 
                    header={headerContent}
                    body={bodyContent}
                    footer={
                        <div className="modal-footer-buttons">
                            <button 
                                onClick={handleCloseModal}
                                className="btn-secondary"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleCloseModal}
                                className="btn-ok"
                            >
                                OK
                            </button>
                        </div>
                    }
                    onClose={handleCloseModal}
                />
            )}
            
            <br />
            
            <form onSubmit={handleSubmit} className="modal-test-form">
                <input 
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Enter modal content"
                    className="modal-input"
                />
                <br/>
                <button 
                    type="submit"
                    className="btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}