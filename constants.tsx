
import { CrowdEntry } from './types';

export const MOCK_CROWD_DATA: CrowdEntry[] = [
  { id: '1', name: 'Alice Johnson', sex: 'Female', entryTime: '11:05 AM', avatar: 'https://i.pravatar.cc/150?u=alice' },
  { id: '2', name: 'Brian Smith', sex: 'Male', entryTime: '11:03 AM', avatar: 'https://i.pravatar.cc/150?u=brian' },
  { id: '3', name: 'Catherine Lee', sex: 'Female', entryTime: '11:00 AM', avatar: 'https://i.pravatar.cc/150?u=cath' },
  { id: '4', name: 'David Brown', sex: 'Male', entryTime: '10:50 AM', avatar: 'https://i.pravatar.cc/150?u=david' },
  { id: '5', name: 'Eva White', sex: 'Female', entryTime: '11:20 AM', avatar: 'https://i.pravatar.cc/150?u=eva' },
  { id: '6', name: 'Franklin Pierce', sex: 'Male', entryTime: '11:25 AM', avatar: 'https://i.pravatar.cc/150?u=frank' },
  { id: '7', name: 'Grace Hopper', sex: 'Female', entryTime: '11:30 AM', avatar: 'https://i.pravatar.cc/150?u=grace' },
  { id: '8', name: 'Hank Pym', sex: 'Male', entryTime: '11:35 AM', avatar: 'https://i.pravatar.cc/150?u=hank' },
  { id: '9', name: 'Iris West', sex: 'Female', entryTime: '11:40 AM', avatar: 'https://i.pravatar.cc/150?u=iris' },
  { id: '10', name: 'Jack Reacher', sex: 'Male', entryTime: '11:45 AM', avatar: 'https://i.pravatar.cc/150?u=jack' },
  { id: '11', name: 'Kelly Slater', sex: 'Male', entryTime: '11:50 AM', avatar: 'https://i.pravatar.cc/150?u=kelly' },
  { id: '12', name: 'Lara Croft', sex: 'Female', entryTime: '11:55 AM', avatar: 'https://i.pravatar.cc/150?u=lara' },
];

export const ZONE_DATA = [
  { name: 'Main Entrance', count: 142, capacity: 200, color: 'bg-teal-500' },
  { name: 'Food Court', count: 285, capacity: 300, color: 'bg-orange-500' },
  { name: 'Parking Level 1', count: 89, capacity: 150, color: 'bg-blue-500' },
  { name: 'Retail Wing A', count: 218, capacity: 250, color: 'bg-purple-500' },
];

export const COLORS = {
  primary: '#009688',
  sidebar: '#112222',
  accent: '#00796b'
};
