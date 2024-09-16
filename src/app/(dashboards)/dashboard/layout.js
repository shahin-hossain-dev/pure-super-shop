import Sidebar from "@/components/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section className="md:flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 md:ml-60 md:-mt-10 px-4">{children}</div>
    </section>
  );
}
