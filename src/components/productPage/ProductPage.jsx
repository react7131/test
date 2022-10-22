import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './productPage.css';
import Modal from '../modal/Modal';
import Slider from '../Slider';
import { addToCart } from '../../redux/cartSlicer';
import product1 from '../../images/image-product-1.jpg';
import product2 from '../../images/image-product-2.jpg';
import product3 from '../../images/image-product-3.jpg';
import product4 from '../../images/image-product-4.jpg';
import ptumb1 from '../../images/image-product-1-thumbnail.jpg';
import ptumb2 from '../../images/image-product-2-thumbnail.jpg';
import ptumb3 from '../../images/image-product-3-thumbnail.jpg';
import ptumb4 from '../../images/image-product-4-thumbnail.jpg';

const ProductPage = () => {

  const product = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    thumbImages: [ptumb1, ptumb2, ptumb3, ptumb4],
    mainImages: [product1, product2, product3, product4],
    price: 125.00,
    type: 'sneaker company'
  }

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();

  const handleNumber = (type) => {
    setNumber( number => (type === '+' ? number + 1 : number - 1))
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.thumbImages[0],
      number: number
    }))
  }

  const handelOpen = () => {
    setOpen(true);
  }

  return (
    <>
    <div className='productPage'>
      <div className="photoContainer">
        {/* <div className="main-img" onClick={() => setOpen(true)}>
          <img src={mainImages[index]} alt="" />
        </div>
        <ul className='img-items'>
          {thumbImages.map( (image, i) =>(
            <li key={i} className={i === index ? 'active' : ''}>
              <img onClick={() => setIndex(i)} src={image} />
            </li>
          ))}
        </ul> */}
        <Slider className='large' onclick={handelOpen} index={index} setIndex= {setIndex} mainImages={product.mainImages} thumbImages={product.thumbImages} />
      </div>
      <div className="info">
        <div className='subtitle'>{product.type}</div>
        <h1 className='title'>{product.name}</h1>
        <p className='description'>{product.description}</p>
        <div className='price'>
          <div className='discountedPrice'>
            ${(product.price).toFixed(2)} <span className='discount'>50%</span>
          </div>
          <div className='mainPrice'>$250.00</div>
        </div>
        <div className='btnContainer'>
          <div className='number'>
            <button disabled={number === 1} onClick={() => handleNumber('-')}>-</button>
            <span>{number}</span>
            <button onClick={() => handleNumber('+')} >+</button>
          </div>
          <button className='button' onClick={handleAddToCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero"/></svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
    { open && <Modal setOpen={setOpen} index={index} setIndex= {setIndex} mainImages={product.mainImages} thumbImages={product.thumbImages} />}
    </>
  )
}

export default ProductPage