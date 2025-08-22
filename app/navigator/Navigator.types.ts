import { ArticleData } from "@/api/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Detail: {
    data: ArticleData;
  };
  List: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
