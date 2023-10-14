/* eslint-disable react/prop-types */
import { Suspense ,useState , useEffect} from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({isMoblie}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight 
      // eslint-disable-next-line react/no-unknown-property
      intensity={1.5}
      // eslint-disable-next-line react/no-unknown-property
      groundColor="black"
       />
      <spotLight
        // eslint-disable-next-line react/no-unknown-property
        position={[10, 10, 0]}
        // eslint-disable-next-line react/no-unknown-property
        angle={0.15}
        // eslint-disable-next-line react/no-unknown-property
        penumbra={1}
        // eslint-disable-next-line react/no-unknown-property
        intensity={1000}
        // eslint-disable-next-line react/no-unknown-property
        castShadow
        // eslint-disable-next-line react/no-unknown-property
        shadow-mapSize={1024}
      />
      <pointLight 
      // eslint-disable-next-line react/no-unknown-property
      intensity={5}
       />
      <primitive
        // eslint-disable-next-line react/no-unknown-property
        object={computer.scene}
        scale={isMoblie? 0.7 : 0.75}
        // eslint-disable-next-line react/no-unknown-property
        position={isMoblie ?[0, -3, -2.2] :  [0, -3.25, -1.5]}
        // eslint-disable-next-line react/no-unknown-property
        rotation={[-0.01, -0.2, -0.01]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMoblie, setIsMoblie] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)")
  
    setIsMoblie(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMoblie(event.matches)
    }

    mediaQuery.addEventListener("change" ,handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>

      
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers isMoblie={isMoblie}/>
      <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
