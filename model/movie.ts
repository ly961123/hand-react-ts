interface Actors {
  name: string,
  role: string,
  avatarAddress: string,
}

interface FilmType {
  name: string,
  value: number,
}

export interface TopBars {
  title: string;
  key: string;
}

export interface NowPlayingData {
  name: string,
  nation: string,
  poster: string,
  grade: string,
  runtime: number,
  filmType: FilmType,
  actors: Actors[],
}
export interface NowPlaying {
  list: NowPlayingData[],
  count: number,
}