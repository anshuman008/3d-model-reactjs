import "../App.css";

import { CustomizationProvider } from "../context/Customization";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Configurator from "./Configurator";

const Maincomp = ({goNext}) => {
  return (
    <CustomizationProvider>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-[#f3f5f9]">
            {/* <div className="bg-red-400 h-screen"> */}
               <Canvas >
            <Experience />
          </Canvas>     
            {/* </div> */}
      

          <div className="h-full">
            <Configurator goNext={goNext} />
          </div>
        </div>
      </div>
    </CustomizationProvider>
  );
};

export default Maincomp;
