import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import data from "../data.json";

interface IGet {
  params: {
    slug: string;
  };
}

export async function GET(_: NextRequest, { params }: IGet) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const slug = z.string().parse(params.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return NextResponse.json(
      { message: "Product not found." },
      { status: 400 },
    );
  }

  return NextResponse.json(product);
}
