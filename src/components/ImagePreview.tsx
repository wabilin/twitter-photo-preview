import { For, type Component } from 'solid-js';
import {imagesStore} from '../stores/images'

const ImagePreview: Component = () => {
  const [images] = imagesStore;
  const groups: () => string[][] = () => {
    if (images.length === 0) return [];
    if (images.length === 1) return [[images[0]]];
    if (images.length === 2) return [[images[0]], [images[1]]];
    if (images.length === 3) return [[images[0]], [images[1], images[2]]];
    return [[images[0], images[2]], [images[1], images[3]]];
  }

  return (
    <div
      class='w-[516px] h-[290px] rounded-2xl bg-black
        border border-solid border-black
        flex overflow-hidden gap-px'
    >
      <For each={groups()}>
        {(group) => (
          <div class='w-full h-full flex flex-col gap-px'>
            <For each={group}>
              {(image) => (
                <div class='w-full h-full shrink overflow-hidden'>
                  <img class='w-full h-full object-cover' src={image} />
                </div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default ImagePreview;
