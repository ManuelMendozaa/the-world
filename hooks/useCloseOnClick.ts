import { useEventListener } from './useEventListener';

export function useCloseOnClick(
  ref: React.MutableRefObject<any>,
  closeFunction: () => void
) {
  useEventListener('click', (e) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      closeFunction();
    }
  });

  return ref;
}
