import { configure } from "mobx";

configure({ enforceActions: "never" });

export { type RootStore } from "./root";
export { getRootStore, useRootStore } from "./utils";
