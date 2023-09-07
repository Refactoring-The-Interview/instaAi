// const Storage = require("@aws-amplify/storage");
// const express = require("express");
// const app = express();
// const nocache = require("nocache");
// const path = require("path");
// const bodyParser = require("body-parser");
// const PORT = process.env.PORT || 3000;
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // const { createProxyMiddleware } = require("http-proxy-middleware");
// // app.use(createProxyMiddleware("/api/**", { target: "http://localhost:4000" }));
// app.use(nocache());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build"));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname + "/public/build/index.html"));
//     });
// }

// app.get("/", (req, res) => {
//     res.status(200).send("Hello server is running").end();
// });

// app.get("/test", (req, res) => {
//     res.status(200).send({ msg: "hello from the server" });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on PORT: ${PORT}`);
// });
