export enum AppUrls {
  CHARACTERS = "/character",
  LOCATIONS = "/location",
  EPISODES = "/episode",
}

export enum LanguageEnum {
  EN = "en",
}

export interface DataProps {
  name: string;
  created: string;
  gender: string;
  id: number;
  image: string;
  location: LocationProps;
  origin: OriginProps;
  species: string;
  status: string;
  type: string;
  url: string;
  episode: string[];
}

interface LocationProps {
  name: string;
  url: string;
}

interface OriginProps {
  name: string;
  url: string;
}
