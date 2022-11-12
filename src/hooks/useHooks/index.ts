import { useState } from 'react';

export const useHooks = () => {
  const [state, setState] = useState({});

  const set = (newState: any) => {
    setState((state: any) => ({ ...state, ...newState }));
  };

  return {
    state,
    set,
  };
};
