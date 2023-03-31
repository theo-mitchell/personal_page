import MenuButton from "./menuButton";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <MenuButton />
      <main>{children}</main>
      <Footer />
    </>
  );
}
