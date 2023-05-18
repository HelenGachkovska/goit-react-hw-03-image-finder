import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/index';
import { Gallery} from './styled';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <Gallery className="gallery">
      {images.map(image => {
        return <ImageGalleryItem key={image.id} el={image} />;
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ImageGallery;
