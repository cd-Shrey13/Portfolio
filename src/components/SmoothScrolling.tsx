import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  // lenis options for configuration
  const lenisOptions = {
    // lerp: 1,
    duration: .1,
    // smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
