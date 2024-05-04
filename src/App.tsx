import type { Component } from 'solid-js';
import ImageUploader from './components/ImageUploader';
import ImagePreview from './components/ImagePreview';

const App: Component = () => {
  return (
    <div class='flex flex-col items-center p-8 space-y-5'>
      <h1 class='text-2xl font-semibold text-zinc-300'>
        Photo Layout on Twitter Preview
      </h1>
      <div class='flex flex-col items-stretch gap-5'>
        <ImagePreview />
        <ImageUploader />
      </div>
      <footer class='p-8'>
        <a
          class='text-zinc-300 flex items-center gap-1 text-sm'
          href='https://github.com/wabilin/twitter-photo-preview'
        >
          <img src='/src/assets/github-mark-white.svg' alt='GitHub' class='w-4 h-4' />
          GitHub
        </a>
      </footer>
    </div>
  );
};

export default App;
