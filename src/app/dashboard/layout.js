import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({children}) {
  return (
    <section className="flex gap-5">
     <div className="w-64">
        <Sidebar></Sidebar>
     </div>
    <div className="flex-1">

      {children}
    </div>


    </section>
  );
}
