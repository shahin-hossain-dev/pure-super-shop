import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({children}) {
  return (
    <section className="md:flex">
     <Sidebar></Sidebar>
    <div className="md:flex-1 mt-5 md:ml-60 md:absolute md:top-4">
        {children}
    </div>


 </section>

  );
}
