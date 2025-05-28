import React, { useState } from 'react';

const Card1 = () => {
  const [likes, setLikes] = useState(0);

  const handleError = () => {
    throw new Error('Card1에서 오류가 발생했습니다!');
  };

  return (
    <div className="card" style={{
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img 
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
        alt="Bali Beach"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>발리 해변 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        인도네시아 발리의 아름다운 해변에서 특별한 휴가를 즐겨보세요. 
        수정같이 맑은 바다와 따뜻한 모래사장이 여러분을 기다립니다.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>❤️ {likes}</span>
          <button 
            onClick={() => setLikes(likes + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            좋아요
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

export default Card1; 