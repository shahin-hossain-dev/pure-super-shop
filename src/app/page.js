import Navbar from "@/components/sharePage/Navbar";
import Homepage from "@/components/Homepage/Homepage";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-[1440px] w-[95%] md:w-11/12 mx-auto">
      <main>
        <Navbar/>
        <Homepage />
      </main>
    </div>
  );
}
