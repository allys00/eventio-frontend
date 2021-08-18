import { useEffect, useState } from 'react';

export enum ENUMDevices {
  isMobile = 'isMobile',
  isDesktop = 'isDesktop',
}

interface Size {
  width: number | undefined;
  height: number | undefined;
  device: ENUMDevices | string;
}

function getDeviceFromWidth() {
  return window.innerWidth < 966 ? ENUMDevices.isMobile : ENUMDevices.isDesktop;
}

function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    device: getDeviceFromWidth(),
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        device: getDeviceFromWidth(),
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
