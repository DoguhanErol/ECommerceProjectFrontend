import { Order, OrderItem } from '../../models/Order';
import { API_URL_MEDIA } from '../../config/authConfig';
import { API_URL_PRODUCTS } from '../../config/authConfig';

type Props = {
    order: Order;
};

const OrderCard: React.FC<Props> = (props: Props) => {

    return (
        <div className='card card-compact bg-base-200  shadow-2xl opacity-95 bg-opacity-85 p-1 m-1 h-min'>
            <h2 className='text-lg text-primary flex justify-center'>
                <span>{props.order.status.toUpperCase()}</span>
            </h2>
        <div className='flex flex-row flex-wrap'>
            {props.order.items.map((item: OrderItem, index) => (
                <div key={index} className='card-body max-w-80  m-1 p-1 font-light'>
                    <ul className='border border-l-2 border-r-0 border-t-0 border-b-0 border-gray-500 p-2 shadow-inner'>
                        <img className='rounded-md shadow-lg my-1 max-w-32 max-h-32' src={API_URL_MEDIA + item.product.image} alt={item.product.name} />
                        <h2 className='card-title font-mono text-gray-700'>Product: {item.product.name}</h2>
                        <li className='text-neutral-600 text-base'>Color: {item.product.color}</li>
                        <li className='text-neutral-600 text-base'>Size: {item.product.size}</li>
                        <li className='text-neutral-600 text-base'>Price: {item.product.price}$</li>
                        <li className='text-neutral-600 text-base'>Quantity: {item.quantity}</li>
                        <li className='text-neutral-600 text-base'>Total Amount: <span className='text-primary'> {item.quantity * item.price} $</span></li>

                        <div className='flex justify-end'>
                            <a href={'/products/'+ item.product.id} className='btn btn-secondary text-xs'>Go To Product</a>
                        </div>
                    </ul>
                </div>
            ))}
        </div>
            <div className='flex justify-center'>
                <h3 className='bg-slate-600 rounded-xl px-10 text-xl text-white'>{props.order.totalAmount}$</h3>
            </div>
        </div>
    );
};

export default OrderCard;
