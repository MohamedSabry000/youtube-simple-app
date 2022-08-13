export interface IYoutube {
  id: {kind: string, videoId: string, channelId: string, playlistId: string },
  snippet: {
    channelId: string,
    channelTitle: string,
    description: string,
    publishTime: string,
    publishedAt: string,
    thumbnails: {default: { url: string, width: number, height: number },
                 medium: { url: string, width: number, height: number },
                 high: { url: string, width: number, height: number }, }
    title: string,
  }
}
export type YoutubeContextType = {
  items: IYoutube[];
  loading: boolean;
  error: string;
  // filtered: IYoutube[];
  saveVideos: (snippet: IYoutube[]) => void;
  addVideos: (snippet: IYoutube[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  // filter: (query: number) => void;
};