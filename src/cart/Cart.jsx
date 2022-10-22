import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlicer';
import './cart.css';
import delBtn from '../images/icon-delete.svg';

const Cart = () => {
  
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className='cart'>
        <div className='cart-header'>Cart</div>
        <hr />
        <div className='cart-body'>
            { products.length === 0 ? 'Your cart is Empty' : (
                <>
                {products.map( product => (
                    <div className='cart-item' key={product.id}>
                        <img src={product.img} alt="" className='cart-image' />
                        <div className="cart-info">
                            <p>{product.name}
                                <br />
                                ${product.price} * {product.number} <b>$375.00</b>
                            </p>
                        </div>
                        <img onClick={() => dispatch(removeFromCart(product.id))} className='delete-btn' src={delBtn} alt="" />
                    </div>
                ))}
                <button className='cart-button'>CheckOut</button>
                </>
            )}
        </div>
    </div>
  )
}

export default Cart