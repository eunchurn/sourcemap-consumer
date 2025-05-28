import React, { useState } from 'react';

const Card8 = () => {
  const [foodCount, setFoodCount] = useState(0);

  const handleError = () => {
    throw new Error('Card8에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1508009603885-50cf7c579365" 
        alt="Bangkok"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>방콕 맛집 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        왓 아룬과 차투착 시장이 있는 방콕에서 태국 음식의 매력을 만나보세요.
        길거리 음식과 태국 전통 요리로 입맛을 즐기세요.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#c0392b', fontWeight: 'bold' }}>🍜 음식: {foodCount}</span>
          <button 
            onClick={() => setFoodCount(foodCount + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#c0392b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            맛집 방문
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

export default Card8; 