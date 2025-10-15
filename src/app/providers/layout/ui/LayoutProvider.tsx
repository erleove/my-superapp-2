import { Navbar } from "@/widgets/navbar";
import type { FC, PropsWithChildren } from "react";

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: 16 }}>
        {children}
      </main>
    </>
  );
}
