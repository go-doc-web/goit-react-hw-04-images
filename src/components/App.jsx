import { Component } from 'react';
// import axios from 'axios';

import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from '../shared/Modal';
import ModalDetalis from './ImageGallery/ModalDetalis';

import { searchImages } from '../shared/servises/posts-api';

class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    imageLarge: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const { hits } = await searchImages(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  imageSearch = ({ search }) => {
    if (this.state.search !== search) {
      this.setState({ search: search, items: [], page: 1 });
    }
  };

  LoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  showPost = largeImageURL => {
    console.log(largeImageURL);
    this.setState({
      imageLarge: largeImageURL,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      imageLarge: null,
    });
  };

  render() {
    const { items, loading, imageLarge, showModal, error } = this.state;
    const { LoadMore, imageSearch, showPost, closeModal } = this;

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
  }
}

export default App;
