import React from 'react';

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        marginTop: '20px',
        margin: '0 auto',
        borderRadius: '8px',
        border: '1px solid gray',
        backgroundColor: color || 'lightgray', // fallback color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
      }}
    >
      {color || 'No color selected'}
    </div>
  );
}

export default ColorBox;
