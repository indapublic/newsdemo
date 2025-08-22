import NativeConfig from "react-native-config";
import { Config } from "./types";

export const config: Config = {
  newsApiKey: NativeConfig.NEWS_API_KEY || "",
};
