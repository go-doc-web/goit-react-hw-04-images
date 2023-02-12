import PropTypes from 'prop-types';

import css from './image-gallary-item.module.scss';

const ImageGalleryItem = ({ webformatURL, showPost, largeImageURL }) => {
  return (
    <>
      <li onClick={() => showPost(largeImageURL)} className={css.gallery__item}>
        <img src={webformatURL} alt={webformatURL} />
      </li>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propsTypes = {
  showPost: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
