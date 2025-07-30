import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css';
export default function QrCodegenerator() {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    const handleGenerateQrCode = () => {
        setQrCode(input)
    }

    return (
        <div className="qr-generator-container">
            <h1 className="title">QR Code Generator</h1>
            <div className="input-section">
                <div className="input-group">
                    <input 
                        onChange={(e) => setInput(e.target.value)} 
                        type="text" 
                        name="qr-code" 
                        placeholder="Enter text or URL here"
                        value={input}
                    />
                    <button 
                        disabled={input && input.trim() !== "" ? false : true} 
                        onClick={handleGenerateQrCode}
                    >
                        Generate
                    </button>
                </div>
            </div>
            <div className="qr-display">
                {qrCode ? (
                    <div className="qr-code-container">
                        <QRCode
                            id="qr-code-value" 
                            value={qrCode} 
                            size={280} 
                            bgColor="#fff"
                            fgColor="#000"
                        />
                    </div>
                ) : (
                    <div className="empty-state">
                        Enter text above and generate your QR code
                    </div>
                )}
            </div>
        </div>
    );
}