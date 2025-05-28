import React, { useState } from 'react';

const Card7 = () => {
  const [shoppingCount, setShoppingCount] = useState(0);

  const handleError = () => {
    throw new Error('Card7에서 오류가 발생했습니다!');
  };

  return (
    <div className="card" style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img 
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" 
        alt="Dubai"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>두바이 럭셔리 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        부르즈 할리파와 두바이 몰이 있는 두바이에서 럭셔리한 시간을 보내세요.
        사막 사파리와 쇼핑으로 중동의 화려함을 경험하세요.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#d35400', fontWeight: 'bold' }}>🛍️ 쇼핑: {shoppingCount}</span>
          <button 
            onClick={() => setShoppingCount(shoppingCount + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#d35400',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            쇼핑하기
          </button>
        </div>
        <button 
          onClick={handleError}
          style={{
            padding: '5px 10px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          오류 발생
        </button>
      </div>
    </div>
  );
};

export default Card7; 