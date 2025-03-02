import React from 'react';
import { Cart } from '../../models/Cart';
import { API_URL_MEDIA } from '../../config/authConfig';
import InformationCard from '../ui/InformationCard';
import useCreateOrder from '../../hooks/useCreateOrder';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için import edin
import FailedAlert from '../ui/FailedAlert';
import { useCart } from '../../context/CartContext';

type Tprops = {
  cartData: Cart;
};

const CartItemCard = (props: Tprops) => {
  const { createOrderResponse, isLoading, error, handleCreateOrder } = useCreateOrder();
  const navigate = useNavigate(); // useNavigate hook'unu kullanarak yönlendirme fonksiyonu oluşturun
  const { refetch } = useCart();

  const handleOrderProducts = async () => {

    await handleCreateOrder(); // Siparişi oluştur
    if (error) {
      <FailedAlert message={'Unexpected error!!! Error message:'+ createOrderResponse} />

    } else {
      refetch();
      // Hata yoksa, kullanıcıyı yönlendir
      navigate('/orders'); // Kullanıcıyı /orderstatus sayfasına yönlendir
    }
  };

  // If Cart is Empty
  if (props.cartData.cartItems.length <= 0) {
    return (
      <InformationCard
        mainMessage={'Cart is empty'}
        linkActivate={false}
      />
    );
  }

  // If Cart Not Empty
  return (
    <>
      <div className="overflow-x-auto min-h-screen">
        <table className="table bg-base-200 shadow-2xl opacity-95 my-2">
          {/* head */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Color</th>
              <th>Size</th>
              <th>Piece Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {props.cartData.cartItems.map((cartItem, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={API_URL_MEDIA + cartItem.product.image}
                          alt="Product Image" 
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cartItem.product.name}</div>
                      <div className="text-sm opacity-50">{cartItem.quantity}</div>
                    </div>
                  </div>
                </td>
                <td>{cartItem.color}</td>
                <td>{cartItem.size}</td>
                <td>{parseInt(cartItem.product.price).toString()}$</td>
                <td>{cartItem.quantity * parseInt(cartItem.product.price)}$</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Product</th>
              <th>Color</th>
              <th>Size</th>
              <th>Total Amount: <span className='text-base text-primary'>{parseInt(props.cartData.totalAmount).toString()}$</span></th>
            </tr>
          </tfoot>
        </table>
        <div className='flex flex-col'>
          <div className='flex w-5/6 justify-end my-2'>
            {/* Sipariş oluşturma butonunu tıklanabilir hale getirin */}
            <button 
              onClick={handleOrderProducts} 
              className='btn btn-primary' 
              disabled={isLoading}
            >
              Order Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
