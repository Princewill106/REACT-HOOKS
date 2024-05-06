import useBreakpoints from "./useBreakpoints";

export default function BreakpointsComponent() {
  const { isMobile, isTablet } = useBreakpoints();

  return (
    <>
      {isMobile && <div>Mobile</div>}
      {isTablet && <div>Tablet</div>}
    </>
  );
}
