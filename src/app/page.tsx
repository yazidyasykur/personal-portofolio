import Image from "next/image";
import MainLayout from "./components/Layout";
import LeftContainer from "./components/Container/LeftContainer";
import RightContainer from "./components/Container/RightContainer";
import RainScene from "./components/Effects/Rain";
import Drawer from "react-modern-drawer";
import MobileDrawer from "./components/Drawer";
import WorkDetailModal from "./components/Modal/WorkDetailModal";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12">
        <div className="hidden md:block col-span-5 ">
          <LeftContainer />
        </div>
        <div className="col-span-12 md:col-span-7">
          <RightContainer />
        </div>
      </div>
    </MainLayout>
  );
}
