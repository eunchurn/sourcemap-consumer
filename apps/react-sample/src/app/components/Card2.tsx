import React, { useState } from 'react';

const Card2 = () => {
  const [bookings, setBookings] = useState(0);

  const handleError = () => {
    throw new Error('Card2에서 오류가 발생했습니다!');
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
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" 
        alt="Tokyo City"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }}
      />
      <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>도쿄 도시 여행</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        일본 도쿄의 현대적인 도시 풍경과 전통적인 문화를 동시에 경험해보세요.
        신주쿠의 번화가부터 아사쿠사의 전통 사원까지, 다양한 매력을 만나볼 수 있습니다.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#27ae60', fontWeight: 'bold' }}>📅 예약: {bookings}</span>
          <button 
            onClick={() => setBookings(bookings + 1)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            예약하기
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

export default Card2; 