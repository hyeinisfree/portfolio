import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

interface LayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
