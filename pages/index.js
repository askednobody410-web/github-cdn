// pages/index.js
export default function Home() {
  return (
    <div style={{ 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#0a0a0a',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1>GitHub CDN 🚀</h1>
      <p>Download GitHub files instantly</p>
      
      <div style={{ 
        backgroundColor: '#1a1a1a',
        padding: '30px',
        borderRadius: '10px',
        marginTop: '20px',
        maxWidth: '600px'
      }}>
        <input
          placeholder="username/repo or username/repo/file.js"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #333',
            color: 'white',
            borderRadius: '5px'
          }}
        />
        <button style={{
          width: '100%',
          padding: '15px',
          marginTop: '15px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Download
        </button>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <p>Examples:</p>
        <code style={{ 
          backgroundColor: '#2a2a2a', 
          padding: '5px 10px',
          borderRadius: '5px',
          display: 'block',
          margin: '5px 0'
        }}>
          vercel/next.js
        </code>
        <code style={{ 
          backgroundColor: '#2a2a2a', 
          padding: '5px 10px',
          borderRadius: '5px',
          display: 'block',
          margin: '5px 0'
        }}>
          facebook/react
        </code>
      </div>
    </div>
  );
}
