import Navbar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      <div className="my-40 w-11/12 mx-auto">{children}</div>
    </div>
  );
}