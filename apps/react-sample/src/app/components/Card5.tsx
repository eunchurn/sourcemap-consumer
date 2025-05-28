import React, { useState } from 'react';

const Card5 = () => {
  const [photos, setPhotos] = useState(0);

  const handleError = () => {
    throw new Error('Card5에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1552832230-c0197dd311b5" 
        alt="Rome"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>로마 역사 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        콜로세움과 바티칸 시티가 있는 로마에서 역사의 흔적을 찾아보세요.
        고대 로마의 영광과 르네상스의 예술을 만나볼 수 있습니다.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#e67e22', fontWeight: 'bold' }}>📸 사진: {photos}</span>
          <button 
            onClick={() => setPhotos(photos + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#e67e22',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            사진 찍기
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

export default Card5; 