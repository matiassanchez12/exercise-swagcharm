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

    <main style={{ margin: "80px auto", maxWidth: "1440px", padding: "0px 30px" }}>{children}</main>

    <footer>
      <Footer />
    </footer>
  </>
);
