import { createClient } from 'microcms-js-sdk';
import { NextResponse } from "next/server";

export type Portfolio = {
    title: string;
    description: string;
    image: string;
    date: string;
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

export const getPortfolios = async () => {
    const portfolios = await client.getList<Portfolio>({
    endpoint: "portfolios",
    });
    return portfolios;
}

export async function GET() {
  try {
    const portfolios = await getPortfolios();
    return NextResponse.json(portfolios);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching posts:", error.message);
    } else {
      console.error("Error fetching posts:", error);
    }
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
