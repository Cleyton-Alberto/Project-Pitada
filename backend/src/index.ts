import { server } from "./Server.js";

server.listen(process.env.PORT, () => {
  console.log(`Sever Ok, Port: ${process.env.PORT}`);
});
