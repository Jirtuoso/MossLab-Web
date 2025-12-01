export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  timestamp: number;
}