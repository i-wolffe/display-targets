import Particles from 'react-particles'
// import particlesConfig from './config/particles-config'
import particlesConfig from './config/particles-2'
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);
  return (
    <Particles 
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
    >
    </Particles>
  )
}

export default ParticlesBackground