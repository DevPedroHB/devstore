import { Header } from "@/components/header";
import { CartContextProvider } from "@/contexts/cart-context";
import { ReactNode } from "react";

interface IStoreLayout {
  children: ReactNode;
}

export default function StoreLayout({ children }: IStoreLayout) {
  return (
    <CartContextProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-app grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartContextProvider>
  );
}
