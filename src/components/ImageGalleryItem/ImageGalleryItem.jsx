import PropTypes from 'prop-types';
import { ImageGalleryEl, ImageGalleryElImage } from './styled';

const ImageGalleryItem = ({ el }) => {
  const { tags, webformatURL } = el;
  return (
    <ImageGalleryEl className="gallery-item">
      <ImageGalleryElImage src={webformatURL} alt={tags} />
    </ImageGalleryEl>
  );
};

ImageGalleryItem.propTypes = {
  el: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired
  })
}

export default ImageGalleryItem;
