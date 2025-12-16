// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  // If there's a query in URL, auto-download
  useEffect(() => {
    const { user, repo, file } = router.query;
    
    if (user && repo) {
      let apiUrl = `/api/download?user=${user}&repo=${repo}`;
      if (file) {
        apiUrl += `&file=${encodeURIComponent(file)}`;
      }
      
      // Auto-download after a small delay
      setTimeout(() => {
        window.location.href = apiUrl;
      }, 500);
    }
  }, [router.query]);

  return (
    <div style={{ 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#0a0a0a',
      color: 'white',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1>GitHub CDN 🚀</h1>
      <p>Auto-download GitHub repos as ZIP</p>
      
      <div style={{ 
        backgroundColor: '#1a1a1a',
        padding: '30px',
        borderRadius: '10px',
        marginTop: '30px',
        maxWidth: '600px',
        margin: '30px auto'
      }}>
        <h3>Usage:</h3>
        <p style={{ color: '#aaa' }}>
          Just add parameters to the URL
        </p>
        
        <div style={{ 
          backgroundColor: '#2a2a2a',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '20px',
          textAlign: 'left',
          overflowX: 'auto'
        }}>
          <code style={{ color: '#0af' }}>
            https://github-cdn.vercel.app/?user=username&repo=reponame
          </code>
        </div>
        
        <p style={{ marginTop: '20px' }}>
          Or use direct API:
        </p>
        <div style={{ 
          backgroundColor: '#2a2a2a',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '10px',
          textAlign: 'left',
          overflowX: 'auto'
        }}>
          <code style={{ color: '#0af' }}>
            https://github-cdn.vercel.app/api/download?user=username&repo=reponame
          </code>
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h4>Examples:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
            <a 
              href="/?user=vercel&repo=next.js"
              style={{
                padding: '12px',
                backgroundColor: '#0070f3',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              Download Vercel/Next.js ZIP
            </a>
            <a 
              href="/?user=facebook&repo=react"
              style={{
                padding: '12px',
                backgroundColor: '#0070f3',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              Download Facebook/React ZIP
            </a>
            <a 
              href="/api/download?user=tailwindlabs&repo=tailwindcss"
              style={{
                padding: '12px',
                backgroundColor: '#222',
                color: 'white',
                borderRadius: '6px',
                textDecoration: 'none',
                textAlign: 'center',
                border: '1px solid #444'
              }}
            >
              Direct API: Tailwind CSS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
