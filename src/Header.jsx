// Code for Header component
function Header() {
  return (
<div>
      {/* Header Section */}
      <header style={{
        padding: '10px 50px',
        borderBottom: '3px solid #add8e6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'left'
        }}>
          Company name
        </div>
        
       
      </header>
    </div>
  );
}

export default Header;
