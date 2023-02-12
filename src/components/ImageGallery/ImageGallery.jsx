import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import css from './image-galary.module.scss';

const ImageGallery = ({ items, showPost }) => {
  const elements = items.map(item => (
    <ImageGalleryItem key={item.id} {...item} showPost={showPost} />
  ));
  return (
    <div className="conteiner">
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};

export default ImageGallery;

ImageGalleryItem.propsDefault = {
  items: [],
};

ImageGalleryItem.propsTypes = {
  showPost: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
