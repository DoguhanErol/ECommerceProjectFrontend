import React from 'react';
import { getCart } from '../services/CartService';
import LoadingComponent from '../components/modals/Loading';
import ErrorComponent from '../components/modals/Error';
import useFetchCartList from '../hooks/useFetchCartList';
import CartItemCard from '../components/modals/CartItemCard';
import InformationCard from '../components/ui/InformationCard';
import bg_image from '../assets/bg-orders.webp'

const CartPage = () => {
    const { cartData, cartError, cartIsLoading, refetch } = useFetchCartList();

    return (
        <>
            {cartIsLoading ? (
                <LoadingComponent />
            ) : cartError ? (
                <ErrorComponent message={'Error message: ' + cartError} />
            )  : cartData && cartData.cartItems.length <=0  ? (
                //  If Cart is Empty
                <div className='bg-cover' style={{ backgroundImage: `url(${bg_image})` }}>
                    <InformationCard
                    mainMessage={'Cart is empty'}
                    linkActivate= {false}
                    />
                </div>
            ): cartData && cartData.cartItems ? (
                <div className='bg-cover' style={{ backgroundImage: `url(${bg_image})` }}>
                <CartItemCard cartData={cartData} />
                </div>
            ):(
                <ErrorComponent message={'Can`t reach cart data, Error message: ' + cartError} />
            )}
        </>
    );
};

export default CartPage;
