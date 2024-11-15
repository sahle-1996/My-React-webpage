// Import React if necessary (if using a framework, this might be automatic)

// Code to display footer of the website
function Footer() {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      borderTop: '1px solid #e5e5e5',
      padding: '30px',
      gap: '80px',
      fontSize: '16px'
    }}>
      <div>
        <h3 style={{ marginBottom: '15px' }}>Features</h3>
        <p><a href="#cool-stuff" style={{ color: '#007bff', textDecoration: 'none' }}>Cool stuff</a></p>
        <p><a href="#random-feature" style={{ color: '#000', textDecoration: 'none' }}>Random feature</a></p>
        <p><a href="#team-feature" style={{ color: '#000', textDecoration: 'none' }}>Team feature</a></p>
      </div>
      <div>
        <h3 style={{ marginBottom: '15px' }}>Resources</h3>
        <p><a href="#resource" style={{ color: '#000', textDecoration: 'none' }}>Resource</a></p>
        <p><a href="#resource-name" style={{ color: '#000', textDecoration: 'none' }}>Resource name</a></p>
      </div>
      <div>
        <h3 style={{ marginBottom: '15px' }}>About</h3>
        <p><a href="#team" style={{ color: '#000', textDecoration: 'none' }}>Team</a></p>
        <p><a href="#locations" style={{ color: '#000', textDecoration: 'none' }}>Locations</a></p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'space-between'
    }}>
      {/* Main content */}
      <main style={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1 
      }}>
        <h1>Features</h1>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
