import { Features } from '../features/features';
import { Header } from '../header/header';
import { StoryContent } from '../story-content/story-content';
import { StoryPictures } from '../story-pictures/story-pictures';
import { Realtors } from '../realtors/realtors';
import { Sidebar } from '../sidebar/sidebar';
import './app.scss';
import { Homes } from '../homes/homes';
import { Gallery } from '../gallery/gallery';
import { Footer } from '../footer/footer';

export function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}
