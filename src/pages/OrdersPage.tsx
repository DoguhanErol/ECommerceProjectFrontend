//Permission: USER
import React from 'react'
import { useFetchOrders } from '../hooks/useFetchOrders'
import { Order, OrderItem } from '../models/Order'
import LoadingComponent from '../components/modals/Loading'
import ErrorComponent from '../components/modals/Error'
import OrderCard from '../components/modals/OrderCard'
import bg_image from '../assets/bg-orders.webp'
import InformationCard from '../components/ui/InformationCard'

const OrdersPage :React.FC = () => {

  const {error,isLoading,orders,refetch} = useFetchOrders()


  return (
    <>
    {isLoading ? (
      <LoadingComponent />
    ): error ?(
      <ErrorComponent message={error} />
    ): orders.length == 0 ? (
      <div className='bg-cover' style={{ backgroundImage: `url(${bg_image})` }}>
        <InformationCard
        mainMessage={'There is no order'}
        linkActivate= {false}
        />
      </div>
    ): orders ? (
      <div className=' bg-cover min-h-screen' style={{ backgroundImage: `url(${bg_image})` }}>
        <h1 className='flex justify-center text-2xl text-success'>Orders</h1>
        <div className='flex flex-col flex-wrap justify-center sm:justify-normal'>
          {orders.map((order: Order, index) => (
            <OrderCard key={index} order={order} />
          ))}
        </div>
      </div>

    ):(
      <ErrorComponent message='Unexepted Error...' />
    )}
      
    </>
  )
}

export default OrdersPage