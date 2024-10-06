import { PresentationControls, Stage } from "@react-three/drei";
import Piano from "../../public/Plain_piano";
import { Suspense } from "react";

const Experience = () => {

    return (

        <PresentationControls
            speed={1.5}
            global
            zoom={0.9}
            polar={[0.1, Math.PI/2]}
        >

            <Stage environment={"sunset"} intensity={0.5} contactShadow={true}>
                <Suspense fallback={null}>
                    <Piano position={[-2, -1, 0]} scale={[0.09, 0.09, 0.09]} rotation={[Math.PI / 6, -Math.PI / 2.5, 0]}/>
                </Suspense>
            </Stage>

        </PresentationControls>

    )

}

export default Experience