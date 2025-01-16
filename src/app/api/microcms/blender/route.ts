import { createClient } from 'microcms-js-sdk';
import { NextResponse } from "next/server";

export type Blender = {
    title: string;
    image: string;
    link: string;
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

export const getBlender = async () => {
    const blender = await client.getList<Blender>({
    endpoint: "blender",
    });
    return blender;
}

export async function GET() {
  try {
    const blender = await getBlender();
    return NextResponse.json(blender);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching posts:", error.message);
    } else {
      console.error("Error fetching posts:", error);
    }
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
