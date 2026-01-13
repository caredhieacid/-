export type Screen = 'dashboard' | 'learning' | 'stats' | 'books' | 'profile';

export interface UserStats {
  totalWords: number;
  streak: number;
  accuracy: number;
  todayGoal: number;
  todayProgress: number;
}

export interface VocabularyBook {
  id: string;
  title: string;
  description: string;
  count: number;
  learners: string;
  tags: string[];
  imageUrl: string;
  theme: 'green' | 'blue' | 'red' | 'teal';
}

export interface ChartDataPoint {
  day: string;
  value: number;
}
