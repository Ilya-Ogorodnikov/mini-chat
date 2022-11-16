import { DocumentData } from 'firebase/firestore';

export interface ICustomButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
}

export interface IMessageProps {
  message: DocumentData;
}
