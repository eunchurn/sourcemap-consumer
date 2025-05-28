import React, { useState } from 'react';

const Card12 = () => {
  const [trekCount, setTrekCount] = useState(0);

  const handleError = () => {
    throw new Error('Card12에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1502082553048-f009c37129b9" 
        alt="Machu Picchu"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>마추픽추 트레킹 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        페루의 고대 유적 마추픽추에서 잊지 못할 트레킹을 경험해보세요.
        안데스 산맥의 장엄한 풍경과 신비로운 역사를 느껴보세요.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#27ae60', fontWeight: 'bold' }}>🥾 트레킹: {trekCount}</span>
          <button 
            onClick={() => setTrekCount(trekCount + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            트레킹 하기
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

export default Card12; 