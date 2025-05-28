import React, { useState } from 'react';

const Card6 = () => {
  const [surfCount, setSurfCount] = useState(0);

  const handleError = () => {
    throw new Error('Card6에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9" 
        alt="Sydney"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>시드니 해변 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        오페라 하우스와 본다이 비치가 있는 시드니에서 해변의 낭만을 즐겨보세요.
        서핑과 해변 산책으로 호주 특유의 여유를 만끽하세요.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#1abc9c', fontWeight: 'bold' }}>🏄 서핑: {surfCount}</span>
          <button 
            onClick={() => setSurfCount(surfCount + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#1abc9c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            서핑하기
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

export default Card6; 