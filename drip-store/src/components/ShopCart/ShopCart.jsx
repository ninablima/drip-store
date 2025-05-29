import './ShopCart.css'

export const ShopCart = ({value}) => {
    return (
        <div className='box-shop-cart'>
            <a href="">
                <img src='../../../public/cart.svg' />
            </a>
            <span>{value}</span>
        </div>
    )
}