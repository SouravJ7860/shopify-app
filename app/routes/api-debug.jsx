import { connectDB } from "../mongodb.server";

export async function loader() {
  try {
    console.log("URI =", process.env.MONGODB_URI);

    await connectDB();

    return Response.json({
      success: true,
      message: "Connected",
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      error: error.message,
      stack: error.stack,
    });
  }
}