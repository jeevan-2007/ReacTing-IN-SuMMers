import { useState } from "react"


function Colorchanger() {
    const [type, setType] = useState('Hex')
    const [color, setColor] = useState('#000000')

    const hancdleCreateRandomColor = (type) => {
        if (type === 'hex') {
            const C = "#" + Math.floor(Math.random() * 16777215).toString(16)
            setColor(C)
        }
        else if (type === 'rgb') {
            const r = Math.floor(Math.random() * 256); // 0–255
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const rgb = `rgb(${r}, ${g}, ${b})`;
            setColor(rgb);
        }
        else {
            const C = "#" + Math.floor(Math.random() * 16777215).toString(16)
            setColor(C)
        }

    }
    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <button
                    onClick={() => hancdleCreateRandomColor('random')}
                    style={{
                        background: '#fef3c7',
                        border: '1px solid #fbbf24',
                        borderRadius: '4px',
                        padding: '10px 16px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#92400e',
                        cursor: 'pointer',
                        fontFamily: 'Segoe UI, sans-serif',
                        margin: '0 5px 10px 0'
                    }}
                >
                    Generate Random Color
                </button>

                <button
                    onClick={() => {
                        setType('rgb');
                        hancdleCreateRandomColor('rgb');
                    }}
                    style={{
                        background: '#dbeafe',
                        border: '1px solid #3b82f6',
                        borderRadius: '4px',
                        padding: '10px 16px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1e40af',
                        cursor: 'pointer',
                        fontFamily: 'Segoe UI, sans-serif',
                        margin: '0 5px 10px 0'
                    }}
                >
                    Generate RGB Color
                </button>

                <button
                    onClick={() => {
                        setType('hex');
                        hancdleCreateRandomColor('hex');
                    }}
                    style={{
                        background: '#dcfce7',
                        border: '1px solid #22c55e',
                        borderRadius: '4px',
                        padding: '10px 16px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#166534',
                        cursor: 'pointer',
                        fontFamily: 'Segoe UI, sans-serif',
                        margin: '0 5px 10px 0'
                    }}
                >
                    Generate Hex Color
                </button>
            </div>
            <div style={{
                marginTop: "2rem",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: "600px",
                width: "100%",
                backgroundColor: color,
                borderRadius: "20px",
                border: "4px solid #fff",
                color: 'white',
                textAlign: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                transition: 'background-color 0.3s ease-in-out',
            }}>{color}</div>
        </div>
    )
}
export default Colorchanger