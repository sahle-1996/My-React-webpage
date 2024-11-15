

const Home = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '30px', // Align at the top of the page
      right: '30px', // Space from the right edge
    }}>
      <a 
        href="/" 
        style={{
          color: '#000',
          textDecoration: 'underline',
          textDecorationColor: '#000',
          padding: '5px 10px',
          borderRadius: '5px',
          transition: 'color 0.3s ease, backgroundColor 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#fff';
          e.target.style.backgroundColor = '#add8e6';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#000';
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        Support
      </a>
    </div>
  );
};

export default Home;