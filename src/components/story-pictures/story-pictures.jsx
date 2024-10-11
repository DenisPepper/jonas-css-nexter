import './story-pictures.scss';
import imgStory1 from '/src/assets/story-1.jpeg';
import imgStory2 from '/src/assets/story-2.jpeg';

export function StoryPictures() {
  return (
    <div className='story__pictures'>
      <img src={imgStory1} alt='' className='story__img--1' />
      <img src={imgStory2} alt='' className='story__img--2' />
    </div>
  );
}
