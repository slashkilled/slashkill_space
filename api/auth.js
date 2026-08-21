export default function handler(req, res) {
  const clientId = (process.env.OAUTH_CLIENT_ID || '').trim();
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo%20user`;
  
  res.redirect(url);
}
