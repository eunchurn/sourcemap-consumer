import React, { useState } from 'react';

const Card3 = () => {
  const [wishes, setWishes] = useState(0);

  const handleError = () => {
    throw new Error('Card3에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" 
        alt="Paris"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>파리 로맨틱 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        에펠탑과 루브르 박물관이 있는 파리에서 로맨틱한 시간을 보내세요.
        세느강을 따라 산책하며 프랑스의 예술과 문화를 만끽하세요.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#9b59b6', fontWeight: 'bold' }}>✨ 소원: {wishes}</span>
          <button 
            onClick={() => setWishes(wishes + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#9b59b6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            소원 빌기
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

export default Card3; 