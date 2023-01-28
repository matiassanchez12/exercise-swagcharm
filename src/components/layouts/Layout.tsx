import { ReactNode } from "react";
import { Footer, Navbar } from "../ui";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => (
  <>
    <nav>
      <Navbar />
    </nav>

    <main style={{ margin: "88px auto", minHeight: "60vh", maxWidth: "1440px" }}>{children}</main>

    <footer>
      <Footer />
    </footer>
  </>
);
