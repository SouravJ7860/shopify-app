import Announcement from "../models/Announcement.server";
import { connectDB } from "../mongodb.server";
import { authenticate } from "../shopify.server";

export async function action({ request }) {
  try {
    const body = await request.json();

    await connectDB();

    const savedAnnouncement = await Announcement.create({
      text: body.text,
    });

    const { admin } = await authenticate.admin(request);

    const response = await admin.graphql(
      `#graphql
      mutation SaveAnnouncement(
        $ownerId: ID!,
        $value: String!
      ) {
        metafieldsSet(
          metafields: [
            {
              ownerId: $ownerId
              namespace: "my_app"
              key: "announcement"
              type: "single_line_text_field"
              value: $value
            }
          ]
        ) {
          metafields {
            id
            namespace
            key
            value
          }
          userErrors {
            field
            message
          }
        }
      }
      `,
      {
        variables: {
          ownerId: "gid://shopify/Shop/73671180399",
          value: body.text,
        },
      }
    );

    const result = await response.json();

    return Response.json({
      success: true,
      mongoData: savedAnnouncement,
      metafieldData: result,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}