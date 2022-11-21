export interface Download {
  state: 'PENDING' | 'IN_PROGRES' | 'DONE';
  progress: number;
  content: Blob | null;
}
