import { Location } from "@components/card/CityCard/types";

export enum Routes {
    Home = 'Home',
    City = 'City',
}

export type RootStackParamList = {
    Home: undefined;
    City: { location: Location };
};