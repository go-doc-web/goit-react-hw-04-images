import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#c42339"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
};

export default Loader;
