import { useState, useEffect } from 'react';

import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from '../shared/Modal';
import ModalDetalis from './ImageGallery/ModalDetalis';

import { searchImages } from '../shared/servises/posts-api';

const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [imageLarge, setImageLarge] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchImages = async () => {
      try {
        setLoading(true);

        const { hits } = await searchImages(search, page);

        setItems(prevState => [...prevState, ...hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [search, page]);

  const imageSearch = ({ searchForm }) => {
    if (searchForm === search) {
      return;
    }
    console.log(searchForm);
    setSearch(searchForm);
    setItems([]);
    setPage(1);
  };

  const showPost = largeImageURL => {
    console.log(largeImageURL);
    setImageLarge(largeImageURL);
    setShowModal(true);
  };

  const LoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const closeModal = () => {
    setShowModal(false);
    setImageLarge(null);
  };

  return (
    <>
      <div className="App">
        <Searchbar onSubmit={imageSearch} />

        <ImageGallery items={items} showPost={showPost} />
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {Boolean(items.length) && (
          <Button onClick={LoadMore} text="Load more" type="button" />
        )}
        {showModal && (
          <Modal close={closeModal}>
            <ModalDetalis imageLarge={imageLarge} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
