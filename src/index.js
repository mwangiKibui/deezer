require("dotenv").config();
const axios = require("axios");
const express = require("express");
const PORT = process.env.NODE_ENV || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes.

app.get('/',(req,res) => {
	return res.send("<h2>Welcome to implementing deezer API</h2>")
});


// login.
// login_url = `https://connect.deezer.com/oauth/auth.php?app_id=${process.env.APP_ID}&redirect_uri=${process.env.REDIRECT_URI}&perms=basic_access,email,offline_access`

//getting access token.
app.get('/get-access-token', async (req,res) => {

	let url = `https://connect.deezer.com/oauth/access_token.php?app_id=${process.env.APP_ID}&secret=${process.env.APP_SECRET}&code=${process.env.APP_CODE}`;

	let result = await axios.default.get(url);

	let access_token = result.data.split("&")[0].split("=")[1];

	console.log(doc)

	return res.send({
		success:true,
		message:access_token
	})


})

app.get("/auth", (req,res) => {

	return res.send("<h1>You are authenticated now!!</h1>");

});

//getting top tracks

app.get('/get')

async function main(){

	await app.listen(PORT, () => {
		console.log(`App started on http://localhost:${PORT}`)
	})

};

main()
.catch(console.log);