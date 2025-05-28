import React, { useState } from 'react';

const Card11 = () => {
  const [sunsets, setSunsets] = useState(0);

  const handleError = () => {
    throw new Error('Card11에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" 
        alt="Santorini"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>산토리니 석양 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        그리스 산토리니의 푸른 바다와 하얀 집들이 어우러진 석양을 감상해보세요.
        낭만적인 분위기와 지중해의 아름다움을 만끽할 수 있습니다.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>🌅 석양: {sunsets}</span>
          <button 
            onClick={() => setSunsets(sunsets + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#8e44ad',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            석양 보기
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

export default Card11; 