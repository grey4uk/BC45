import {
  Image,
  PreviewImage,
} from './ImageComponent.styled';

const ImageComponent = () => {
  return (
    <>
      <Image
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        alt='alt'
        outlined={true}
      />
      <PreviewImage
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        alt='alt'
        rad='50%'
      />
    </>
  );
};

export default ImageComponent;
