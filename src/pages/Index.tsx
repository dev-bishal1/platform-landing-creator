import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
          <main className="md:ml-64">
            <Hero />
            <Features />
          </main>
          <Footer className="md:ml-64" />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;