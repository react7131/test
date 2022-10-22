import './modal.css';
import img from '../../images/image-product-1.jpg'
import Slider from '../Slider';

const Modal = ({ setIndex, index, setOpen, mainImages, thumbImages }) => {
  return (
    <div className='modalContainer'>
        <div className="modalWrapper">
        <svg className='close' onClick={() => setOpen(false)} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fillRule="evenodd"/></svg>
            {/* <div className='main-img'>
                <span className='prev'>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </span>
                <img src={img} alt="" />
                <span className='next'>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </span>
            </div>
            <ul className='img-items'>
                {
                thumbImages.map( image => (
                    <li key={image}>
                        <img src={image} />
                    </li>
                ))}
            </ul> */}
            <Slider nav={true} index={index} setIndex= {setIndex} mainImages={mainImages} thumbImages={thumbImages} />
        </div>
    </div>
  )
}

export default Modal