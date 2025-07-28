import "./Modal.css";

export default function Modal({ id, header, body, footer, onClose }) {
    return (
        <div id={id || 'Modal'} className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{header ? header : 'Header'}</h2>
                    <span className="close-modal-icon" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    {
                        body ? body : <div>
                            <p>This is a custom modal popup component.</p>
                            <p>You can customize the content as needed.</p>
                        </div>
                    }
                </div>
                <div className="modal-footer">
                    {
                        footer ? footer : <h2>Footer</h2>
                    }
                </div>
            </div>
        </div>
    )
}