"use client";

import { store } from "./store";
import { Provider } from "react-redux";

interface IProviderProps {
  children: React.ReactNode;
}
export const Providers = (props: IProviderProps) => {
  return <Provider store={store}>{props.children}</Provider>;
};
