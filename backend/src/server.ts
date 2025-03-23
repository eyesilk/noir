import { app } from "./app";
import prisma from "./lib/prisma";

const PORT = process.env.PORT || 5000;

const start = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log("MongoDB OK.")

    app.listen(PORT, (): void => {
      console.log(`Server OK. Port: ${process.env.PORT}`);
    });
  } catch (err: unknown) {
    console.log("Server shutdown with error: ", err);
  }
};

start()