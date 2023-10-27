import { Header } from "@/components/header";
import { ReactNode } from "react";

interface IStoreLayout {
  children: ReactNode;
}

export default function StoreLayout({ children }: IStoreLayout) {
  return (
    <div className="grid-rows-app max-w-app mx-auto grid min-h-screen w-full gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}
