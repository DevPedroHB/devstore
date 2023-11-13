import { api } from "@/data/api";
import { formatCurrency } from "@/functions/format-currency";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });
  const products = await response.json();

  return products;
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-app grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={`/images${highlightedProduct.image}`}
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt={highlightedProduct.title}
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-product-info items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {formatCurrency(highlightedProduct.price)}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => {
        return (
          <Link
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
            key={product.id}
          >
            <Image
              src={`/images${product.image}`}
              className="transition-transform duration-500 group-hover:scale-105"
              width={920}
              height={920}
              quality={100}
              alt={product.title}
            />
            <div className="absolute bottom-10 right-10 flex h-12 max-w-product-info items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {formatCurrency(product.price)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
