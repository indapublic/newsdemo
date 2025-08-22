import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "./Navigator.types";

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [`newsdemo://`],
  config: {
    screens: {
      Detail: "news/:id",
      List: "news",
    },
  },
};
