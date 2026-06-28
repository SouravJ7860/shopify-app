import Announcement from "../models/Announcement.server";
import { connectDB } from "../mongodb.server";

export async function action({ request }) {
  try {
    console.log("STEP 1");

    const body = await request.json();

    console.log("STEP 2", body);

    await connectDB();

    console.log("STEP 3 Mongo Connected");

    const savedAnnouncement = await Announcement.create({
      text: body.text,
    });

    console.log("STEP 4 Saved");

    return Response.json({
      success: true,
      data: savedAnnouncement,
    });
  } catch (error) {
    console.error("SAVE ERROR:", error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}