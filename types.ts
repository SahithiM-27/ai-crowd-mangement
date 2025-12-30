
export interface CrowdEntry {
  id: string;
  name: string;
  sex: 'Male' | 'Female';
  entryTime: string;
  avatar: string;
}

export enum ViewType {
  OVERVIEW = 'Overview',
  CROWD_ENTRIES = 'Crowd Entries'
}
