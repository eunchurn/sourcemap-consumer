import React, { useState } from 'react';

const Card4 = () => {
  const [visits, setVisits] = useState(0);

  const handleError = () => {
    throw new Error('Card4에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9" 
        alt="New York"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>뉴욕 도시 탐험</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        자유의 여신상과 타임스퀘어가 있는 뉴욕에서 도시의 활기를 느껴보세요.
        브로드웨이 쇼와 맨해튼의 스카이라인을 감상하세요.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#f1c40f', fontWeight: 'bold' }}>🏙️ 방문: {visits}</span>
          <button 
            onClick={() => setVisits(visits + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#f1c40f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            방문하기
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

export default Card4; 