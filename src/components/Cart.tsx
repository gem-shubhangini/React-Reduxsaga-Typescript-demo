
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../redux/rootReducer';
function Cart() {
    const cartData = useSelector((state:IRootState)=>state.cartData);
    let amount= cartData.length && cartData.map((item:any)=>item.price).reduce((prev:any,next:number)=>Number(prev)+Number(next))
    console.warn("amount",amount)
  return (
    <div className='Cart'>
      <Link to='/React-Reduxsaga-Typescript-demo'> Go to Products Link</Link>
      <h1>Cart Page</h1>
      <div className='cart-page-conatiner'  >
        <table className='Table'>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
             <td>Category</td>
          </tr>
          {
             Array.isArray(cartData) ?cartData.map((item:any)=> <tr key={item.id}>
              <td>{item.name}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
             <td>{item.category}</td>
            </tr>) : []
          }
        </table>
        <div className='priceDetails'>
          <div>
          <div className='adjustPrice'><span>Amount</span><span>{amount}</span></div>
          <div className='adjustPrice'><span>Discount</span><span>{amount/10}</span></div>
          <div className='adjustPrice'><span>Tax</span><span>10.65</span></div>
          <div className='adjustPrice'><span>Total</span><span>{amount-(amount/10)+10.65}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;