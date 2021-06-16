export interface SearchResults {
    hits?: (HitsEntity)[] | null;
    page: number;
    nbHits: number;
    nbPages: number;
    hitsPerPage: number;
    processingTimeMS: number;
    query: string;
    params: string;
  }
  export interface HitsEntity {
    title: string;
    url: string;
    author: string;
    points: number;
    story_text?: string;
    comment_text?: string;
    _tags?: (string)[] | null;
    num_comments: number;
    objectID: string;
    _highlightResult: HighlightResult;
  }
  export interface HighlightResult {
    title: TitleOrUrl;
    url: TitleOrUrl;
    author: Author;
  }
  export interface TitleOrUrl {
    value: string;
    matchLevel: string;
    matchedWords?: (string)[] | null;
  }
  export interface Author {
    value: string;
    matchLevel: string;
    matchedWords?: (string)[] | null;
  }
  