export default function handler(req, res) {
  const clientId = (process.env.OAUTH_CLIENT_ID || '').trim();
  const scope = encodeURIComponent('repo user');
  
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`;
  
  res.writeHead(302, { Location: authUrl });
  res.end();
}
