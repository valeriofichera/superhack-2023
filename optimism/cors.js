const corsAnywhere = require('cors-anywhere');

const host = 'localhost';
const port = 8000;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
  console.log(`CORS Anywhere running on http://${host}:${port}`);
});
