import React, { useState } from 'react';

const Card10 = () => {
  const [surfing, setSurfing] = useState(0);

  const handleError = () => {
    throw new Error('Card10에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b" 
        alt="Hawaii"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>하와이 파도 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        하와이의 아름다운 해변에서 파도타기와 휴양을 즐겨보세요.
        열대 자연과 함께하는 여유로운 시간을 만끽할 수 있습니다.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#2980b9', fontWeight: 'bold' }}>🏄‍♂️ 파도타기: {surfing}</span>
          <button 
            onClick={() => setSurfing(surfing + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#2980b9',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            파도타기
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

export default Card10; 