import { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Source Map Unminifier',
  description: 'Debug your minified JavaScript code with source maps',
};

export default function Home() {
  return <HomePage />;
}