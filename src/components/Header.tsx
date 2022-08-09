import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { IRootState } from '../redux/rootReducer';
const Header=()=> {
    const result = useSelector((state: IRootState)=>state.cartData);
    console.warn("redux data in header",result)
  return (
    <div className='header App-header'>
      <Link to='/React-Reduxsaga-Typescript-demo' className='link'>
      <h1 className="logo">E-Comm</h1>
      </Link>
      <Link to='/React-Reduxsaga-Typescript-demo/cart'>
        <div className='search-box'>
          <input type="text" placeholder="Search Product" className='search'></input>

        </div>
        <div className='cart-div'>
        <span>{Object.keys(result).length}</span>
        <AddShoppingCartIcon className='shop'></AddShoppingCartIcon>
        </div>
        </Link>
    </div>
  )
}
export default Header;