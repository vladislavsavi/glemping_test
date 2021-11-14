import { FC } from "react";
import { Header } from "@components";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};
