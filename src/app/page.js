import Navbar from "@/components/sharePage/Navbar";
import Homepage from "@/components/Homepage/Homepage";
import CheckOut from "@/components/CheckOut/page";

export default function Home() {
  return (
    <div className="relative">
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main>
          <Navbar />
          <Homepage />
        </main>
      </div>
      <CheckOut />
    </div>
  );
}
