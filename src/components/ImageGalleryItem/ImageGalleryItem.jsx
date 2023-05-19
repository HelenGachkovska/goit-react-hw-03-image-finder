import PropTypes from 'prop-types';
import { ImageGalleryEl, ImageGalleryElImage } from './styled';

const ImageGalleryItem = ({ el, onImageClick }) => {
  const { largeImageURL, tags, webformatURL } = el;
  return (
    <ImageGalleryEl>
      <ImageGalleryElImage
        src={webformatURL}
        alt={tags}
        onClick={() => onImageClick({ largeImageURL, tags })}
      />
    </ImageGalleryEl>
  );
};

ImageGalleryItem.propTypes = {
  el: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
