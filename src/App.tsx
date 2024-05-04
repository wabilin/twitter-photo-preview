import type { Component } from 'solid-js';
import ImageUploader from './components/ImageUploader';
import ImagePreview from './components/ImagePreview';

const App: Component = () => {
  return (
    <div class='flex justify-center p-8'>
      <div class='flex flex-col items-stretch gap-5'>
        <ImagePreview />
        <ImageUploader />
      </div>
    </div>
  );
};

export default App;
