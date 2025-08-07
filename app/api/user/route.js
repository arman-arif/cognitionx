import { createUser, getUserByEmail } from "@/db/queries";
import { sanitizeModel } from "@/lib/db-utils";

export async function GET(request, { params }) {
  try {
    const user = await getUserByEmail("ariful@devnstack.com");

    console.log(user.id);

    return Response.json({
      user: sanitizeModel(user),
    });
  } catch (e) {
    return Response.json({
      message: e.message,
    });
  }
}

export async function POST(request, { params }) {
  try {
    const user = await createUser({
      name: "Ariful",
      email: "ariful4@devnstack.com",
      password: "123456",
    });

    console.log(user.id);

    return Response.json({
      user: sanitizeModel(user),
    });
  } catch (e) {
    return Response.json({
      message: e.message,
    });
  }
}
