import Navbar from "@/components/sharePage/Navbar";
import Homepage from "@/components/Homepage/Homepage";
import CheckOut from "@/components/CheckOut/page";

export default function Home() {
  return (
    <div className="relative">
      <div className="font-[family-name:var(--font-geist-sans)] max-w-[1440px] w-[95%] md:w-11/12 mx-auto">
        <main>
          <Navbar />
          <Homepage />
        </main>
      </div>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <CheckOut />
      </div>
    </div>
  );
}
