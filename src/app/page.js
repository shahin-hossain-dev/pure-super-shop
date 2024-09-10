import Navbar from "@/components/sharePage/Navbar";
import Homepage from "@/components/Homepage/Homepage";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Navbar/>
        <Homepage />
      </main>
    </div>
  );
}
