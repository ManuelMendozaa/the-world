import React from 'react';

export function useEventListener(
  type: string,
  listener: (this: Window, ev: Event) => any
) {
  React.useEffect(function panelScroll() {
    window.addEventListener(type, listener);
    return () => {
      window.removeEventListener(type, listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
