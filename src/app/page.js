export const dynamic = "force-dynamic";
import Homepage from "@/components/Homepage/Homepage";

import ShoppingSideBar from "@/components/ShoppingSideBar/page";

export default function Home() {
  return (
    <div className="relative">
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Homepage />
      </div>
      <ShoppingSideBar />
    </div>
  );
}
