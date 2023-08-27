import React from 'react';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItems = ({
  id,
  cover,
  name,
  price,
  quantity,
  totalPrice
}) => {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="cover" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Unit Price ${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className='plus' onClick={incCartitems}>
                  <AiOutlinePlus />
                </button>
                <button className="num">
                  {quantity}
                </button>
                <button className="minus" onClick={descCartitems}>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className="priceTitle">$ {totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItems;