// api/download.js - SIMPLE ZIP DOWNLOADER
export default function handler(req, res) {
  const { user, repo } = req.query;
  
  if (!user || !repo) {
    return res.status(400).json({
      error: 'Bro I need a GitHub username and repo name',
      example: '/api/download?user=vercel&repo=next.js',
      tip: 'Visit the homepage for a form'
    });
  }
  
  // GitHub's ZIP download URL
  const zipUrl = `https://github.com/${user}/${repo}/archive/refs/heads/main.zip`;
  
  // Force download (optional headers)
  res.setHeader('Content-Disposition', `attachment; filename="${user}-${repo}.zip"`);
  
  // Redirect to GitHub (they handle the actual file serving)
  res.redirect(zipUrl);
}
