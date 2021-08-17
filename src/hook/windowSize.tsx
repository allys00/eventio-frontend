import { useEffect, useState } from 'react';

export enum ENUMDevices {
  isMobile = 'isMobile',
  isDesktop = 'isDesktop',
}

interface Size {
  width: number | undefined;
  height: number | undefined;
  device: ENUMDevices;
}

function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    device: ENUMDevices.isMobile,
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        device:
          window.innerWidth < 966
            ? ENUMDevices.isMobile
            : ENUMDevices.isDesktop,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
