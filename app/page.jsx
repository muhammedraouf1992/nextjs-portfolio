import Image from "next/image";
import bg from "@/public/night-space.jpeg";
import RenderModel from "./_components/RenderModel";
import Astronaut from "./_components/Astronaut";
import Navigation from "./_components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Image
        src={bg}
        fill
        className="-z-50 w-full h-full object-cover object-center"
        alt="background"
      />
      <div className="w-screen h-screen -z-40">
        <Navigation />
        <RenderModel position={[0, 0.2, 0.1]} intensity={0.05}>
          <Astronaut position={[0, -0.2, 0]} animation={"idle"} />
        </RenderModel>
      </div>
    </main>
  );
}
