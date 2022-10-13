import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';


function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productData);
    console.warn('Data in Main component...',data);
    const product = {
        name: 'iPhone',
        type: 'mobile',
        price: 10000,
        color: 'red'
    };
    return (
        <div>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>    
        <div>
            <button onClick = {()=>dispatch(removeFromCart(product))}>Remove from Cart</button>
        </div>
        <div>
            <button onClick = {()=>dispatch(emptyCart())}>Empty Cart</button>    
        </div>
            
        <div>
            <button onClick = {()=>dispatch(productList())}>Get Product List</button>    
        </div>
        </div>
        );
    }
    
    export default Main;
    