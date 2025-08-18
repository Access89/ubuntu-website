import img1 from '@/assets/images/img1.png';
import img2 from '@/assets/images/img2.png';

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen">
      <img src={img1} alt="Gallery image 1" />
      <img src={img2} alt="Gallery image 2" />
    </div>
  );
};

export default Gallery;
