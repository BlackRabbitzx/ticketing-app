import Product from "../models/movie";
import './ProductCard.css'

interface ProductCardProps{
  product: Product
}

const ProductCard = (props: ProductCardProps) => {

  const { product } = props;

  return ( 
    <div className='product_card'>
      { 
        <img className="image" src={product.image_url} /> 
      }
      <div className="text_container">
        <b><h5 className="product_name">{product.title}</h5></b>
        <h3>Genre{product.genre}</h3>
        <h3>Release Date{product.release_date}</h3>
        <h3>Duration{product.duration}</h3>
        <h3>Description{product.description}</h3>
      </div>
    </div>
   );
}
 
export default ProductCard;