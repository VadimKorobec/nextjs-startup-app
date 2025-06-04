import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className=" font-work-sans">
      <Navbar />
      {children}
    </main>
  );
  
};

export default Layout;
