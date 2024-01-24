import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      <div className="my-40 mx-auto w-11/12">{children}</div>
      <Footer />
    </div>
  );
}