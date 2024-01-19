const app = require('./app');

require('dotenv').config();
const PORT = process.env['PORT'] || 3000;  // Default PORT: 3000 if not specified in `.env`

app.listen(
    PORT,
    () => console.log(`Server is running on PORT: ${PORT}`)
);