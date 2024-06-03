import Cards from './Cards'
import "./Cards.css";
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeQuantity } from '../features/ecommerce/ecommerceSlice'

function CartDetails() {
    const ecommerce = useSelector((state) => state.Cardsdata);
    const dispatch = useDispatch()

    return <div>
        <div className="cards-container">
            <div className="cards-wrapper">
                <div className="grid-container">
                    {ecommerce.map((product) => (product.qnty >= 1) ? (<div>
                        <div key={product.id} className="card">
                            <div className="image-container">
                                <img
                                    src={product.imgdata}
                                    alt={product.imageAlt}
                                    className="image"
                                />
                            </div>
                            <div className="product-details">
                                <div>
                                    <h3 className="product-name">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.rname}
                                        </a>
                                    </h3>
                                    <p className="product-color">{product.color}</p>
                                </div>
                                <p className="product-price">₹{product.price}</p>
                            </div>
                            {(product.qnty >= 1) ?
                                <div className="flex ">
                                    <button onClick={() => handleButtonClick(product.id)} className="button bg-white text-black rounded-l-lg">+</button>
                                    <div className="qtyBtn bg-white text-black">{product.qnty}</div>
                                    <button onClick={() => handleButtonClickRemove(product.id)} className="button bg-white text-black rounded-r-lg">-</button>
                                </div>
                                : <button onClick={() => handleButtonClick(product.id)} className="button rounded-md border-none">Add To Cart</button>}
                        </div>
                    </div>) : (""))}
                </div>
            </div>
        </div>
    </div>
}

export default CartDetails