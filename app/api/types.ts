export type ArticleData = {
  source: {
    id: string | null; //   "associated-press",
    name: string; //  "Associated Press"
  };
  author: string | null; // "Aaron Pellish",
  title: string; //  "Obama backs California effort to redraw districts in response to Texas - Politico",
  description: string; // "Federal Reserve governor Lisa Cook late Wednesday said she wouldn’t leave her post after Trump on social media called on her to resign over an accusation from one his officials that she committed mortgage fraud. Bill Pulte, the head of the agency that regulat…",
  url: string | null; // "https://apnews.com/article/trump-federal-reserve-rates-354ddf9b0b2a78eabbe7ebd361bf2e05",
  urlToImage: string | null; // "https://dims.apnews.com/dims4/default/9e4ca1a/2147483647/strip/true/crop/5693x3202+0+296/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5b%2Faa%2F5aa90a355ed95c3ff6ca070ccd37%2Fbf09d936711b40d49bd68f0b484543b6",
  publishedAt: string; // "2025-08-20T21:24:00Z",
  content: string; // "Board of Governors of the Federal Reserve member Lisa Cook, speaks during a conversations with leaders from organizations that include nonprofits, small businesses, manufacturing, supply chain manage… [+169 chars]"
};

export type Articles = ArticleData[];
