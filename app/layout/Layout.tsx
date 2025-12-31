import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="w-full max-w-[1920px] mx-auto overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
