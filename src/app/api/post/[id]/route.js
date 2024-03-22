import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req, res, next) => {
  const { id } = res.params;

  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
