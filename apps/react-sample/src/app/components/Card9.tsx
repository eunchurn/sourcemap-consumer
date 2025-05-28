import React, { useState } from 'react';

const Card9 = () => {
  const [auroraCount, setAuroraCount] = useState(0);

  const handleError = () => {
    throw new Error('Card9에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
        alt="Iceland"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>아이슬란드 오로라 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        아이슬란드의 대자연에서 신비로운 오로라를 감상해보세요.
        온천과 빙하, 폭포가 어우러진 환상적인 풍경을 만끽할 수 있습니다.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#16a085', fontWeight: 'bold' }}>🌌 오로라: {auroraCount}</span>
          <button 
            onClick={() => setAuroraCount(auroraCount + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#16a085',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            오로라 보기
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

export default Card9; 