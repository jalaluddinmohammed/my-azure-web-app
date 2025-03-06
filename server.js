const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	    res.send('Hello,... This is Jalaluddin Mohammed!');
});

app.listen(port, () => {
	    console.log(`Server running on port ${port}`);
});

