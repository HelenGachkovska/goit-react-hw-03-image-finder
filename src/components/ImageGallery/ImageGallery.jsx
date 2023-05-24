import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/index';
import { Gallery } from './styled';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Gallery>
      {images.map(image => {
        return (
          <ImageGalleryItem key={image.id} el={image} onImageClick={onImageClick} />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
  onImageClick: PropTypes.func.isRequired
};

export default ImageGallery;
