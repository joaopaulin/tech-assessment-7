import { server } from "@/server";

const port = process.env.APP_PORT ?? 3000;
server.listen(port, () => console.info(`Application is running process [${process.pid}] on port: ${port}`));
