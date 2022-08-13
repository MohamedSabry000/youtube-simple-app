export interface IYoutube {
  id: object,
  snippet: any
}
export type YoutubeContextType = {
  items: IYoutube[];
  // filtered: IYoutube[];
  saveVideos: (snippet: IYoutube[]) => void;
  addVideos: (snippet: IYoutube[]) => void;
  setLoad: (loading: boolean) => void;
  // filter: (query: number) => void;
};