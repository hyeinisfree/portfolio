import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const RouteGroupLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RouteGroupLayout;
