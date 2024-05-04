import { For, type Component } from 'solid-js';
import {imagesStore} from '../stores/images'

const ImagePreview: Component = () => {
  const [images, setImages] = imagesStore;
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
                <div class='w-full h-full shrink overflow-hidden relative'>
                  <img class='w-full h-full object-cover' src={image} />
                  <div class='absolute top-0 right-0 p-1.5 flex'>
                    <CloseButton onClick={() => {
                      setImages((images) => images.filter((i) => i !== image));
                    }} />
                  </div>
                </div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

const CloseButton : Component<{onClick: () => void}> = (props) => {
  return (
    <button
      class='bg-black opacity-50 w-5 h-5 rounded-full leading-none relative'
      onClick={() => { props.onClick?.() }}
    >
      <span class='absolute top-0 left-0 w-full h-full flex justify-center text-sm text-white items-center'>
        ×
      </span>
    </button>
  )
}

export default ImagePreview;
