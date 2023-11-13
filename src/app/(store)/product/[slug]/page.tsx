import { AddToCartButton } from "@/components/add-to-cart-button";
import { api } from "@/data/api";
import { formatCurrency } from "@/functions/format-currency";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";

interface IProduct {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: IProduct): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product.title,
  };
}

export async function generateStaticParams() {
  const response = await api("/products/featured");
  const products: Product[] = await response.json();

  return products.map((product) => {
    return { slug: product.slug };
  });
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const product = await response.json();

  return product;
}

export default async function Product({ params }: IProduct) {
  const product = await getProduct(params.slug);

  return (
    <div className="relative grid max-h-app grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={`/images${product.image}`}
          alt={product.title}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {formatCurrency(product.price)}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de {formatCurrency(product.price / 12, 2)}
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  );
}
