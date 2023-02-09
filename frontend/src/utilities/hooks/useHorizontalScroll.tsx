import { useRef, useEffect } from 'react';

export const useHorizontalScroll = (): React.RefObject<HTMLDivElement> => {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (event: any) => {
        if (event.deltaY === 0) return;
        if (
          !(el.scrollLeft === 0 && event.deltaY < 0) &&
          !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && event.deltaY > 0)
        ) {
          event.preventDefault();
        }
        el.scrollTo({
          left: el.scrollLeft + event.deltaY,
          behavior: 'smooth',
        });
      };

      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
};
