import { ThemeContext } from "@/theme";
import { observer } from "mobx-react-lite";
import { FunctionComponent, PropsWithChildren, ReactElement, useContext, useEffect } from "react";

export const Consumer: FunctionComponent<PropsWithChildren> = observer(
  (props: PropsWithChildren): ReactElement<PropsWithChildren> => {
    const { children } = props;
    const { loadMode } = useContext(ThemeContext);

    useEffect((): void => {
      loadMode();
    }, [loadMode]);

    return <>{children}</>;
  },
);
