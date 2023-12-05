const particlesConfig = {
  background: {
      color: {
          value: "#1f2833",
      },
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 120,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle"
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 200,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 900,
          },
          value: 200,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 3 },
      },
  },
  detectRetina: true,
}

export default particlesConfig