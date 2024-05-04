import type { Component } from 'solid-js';
import ImageUploader from './components/ImageUploader';
import ImagePreview from './components/ImagePreview';

const App: Component = () => {
  return (
    <div class='flex flex-col items-center p-8'>
      <h1 class='text-2xl font-semibold text-zinc-300 mb-5'>
        Photo Layout on Twitter Preview
      </h1>
      <div class='flex flex-col items-stretch gap-5'>
        <ImagePreview />
        <ImageUploader />
      </div>
    </div>
  );
};

export default App;
