import { RootStore } from "./root";

let rootStore: RootStore | null = null;

/**
 *
 */
function initRootStore(): RootStore {
  if (rootStore !== null) {
    return rootStore;
  }

  const store = new RootStore();
  rootStore = store;

  return store;
}

/**
 *
 */
export function getRootStore(): RootStore {
  return initRootStore();
}

/**
 *
 */
export function useRootStore(): RootStore {
  return initRootStore();
}
