const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path")

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(helmet());
app.use(
    express.static(
        path.join(
            path.dirname(__dirname), "client", "dist"
        )
    )
);

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (client) => {});

server.listen(app.get("port"));