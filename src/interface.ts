export interface resAPIType {
  hits: newsType[];
}

export interface newsType {
  story_id: number;
  title: string;
  url: string;
}
