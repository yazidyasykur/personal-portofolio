import Image from "next/image";
import MainLayout from "./components/Layout";
import LeftContainer from "./components/Container/LeftContainer";
import RightContainer from "./components/Container/RightContainer";
import RainScene from "./components/Effects/Rain";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12">
        <div className="col-span-5 ">
          <LeftContainer />
        </div>
        <div className="col-span-7 p">
          <RightContainer />
        </div>
      </div>
    </MainLayout>
  );
}
