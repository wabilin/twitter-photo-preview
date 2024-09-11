import type { Component, JSX } from 'solid-js';
import { imagesStore } from '../stores/images'

const ImageUploader: Component = () => {
  const [, setImages] = imagesStore;
  let inputRef: HTMLInputElement | undefined = undefined;

  const handleChange: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event> = (e) => {
    const { target } = e;
    if (!target.files) return;

    Promise.all([...target.files].map(toDataUrl)).then((urls) => {
      setImages((images) => [...images, ...urls].slice(0, 4));
      target.value = '';
    });
  }

  return (
    <div class='bg-zinc-400 p-4 px-8 rounded-2xl flex justify-between items-center'>
      <input
        ref={(ele) => { inputRef = ele }}
        type='file'
        multiple
        accept='image/*'
        aria-label='Upload images'
        onchange={handleChange}
      />
      <button
        class='p-2 rounded bg-zinc-700 text-white'
        onClick={() => { setImages([]); }}
      >
        Clear
      </button>
    </div>
  );
};

function toDataUrl(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target) {
        resolve(e.target.result as string);
      }
    };

    reader.readAsDataURL(file);
  });
}

export default ImageUploader;
