
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../redux/rootReducer';
function Cart() {
    const cartData = useSelector((state:IRootState)=>state.cartData);
  return (
    <div className='Cart'>
      <Link to='/React-Reduxsaga-Typescript-demo'>Product List</Link>
      <h1>Cart Page</h1>
      <div className='cart-page-container'>
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
             <td>Category</td>
          </tr>
          {
            cartData.map((item:any)=> <tr key={item.id}>
              <td>{item.name}</td>
            <td>{item.color}r</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
             <td>{item.category}</td>
            </tr>)
          }
        </table>
        <div className='priceDetails'>
          <div>
          <div><span>Amount</span><span>00000</span></div>
          <div><span>Discount</span><span>00000</span></div>
          <div><span>Taxes</span><span>000</span></div>
          <div><span>Total</span><span>00000</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;