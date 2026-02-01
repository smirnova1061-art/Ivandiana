import { useState } from 'react';
import { Book } from './components/Book';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 flex items-center justify-center p-4">
      <MusicPlayer />
      <Book />
    </div>
  );
}