import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ReviewSection from '../../layouts/common/reviewsection';


class ProductListItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onClickHandle(img) {
        this.setState({ image : img} );
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.product.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }


    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
        const {open} = this.state;

            let RatingStars = []
            for(var i = 0; i < product.rating; i++) {
                RatingStars.push(<i className="fa fa-star" key={i}></i>)
            }

        return (
            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} >
            <div class="hotel-card">
            <div class="image-wrap">
                <div class="swipe-wrap ">
                    <div>
                        <div class="react-swipeable-view-container">
                            <div aria-hidden="true" data-swipeable="true">
                                <div>

                                <img src={product.variants?this.state.image?this.state.image:product.variants[0].images:product.pictures[0]}className="img-fluid" alt="" />
                                    </div>
                            </div>
                           
                        </div>
                    </div>
                    <div class="nav-wrap dark"></div><span class="arrow left"></span><span class="arrow right"></span></div>
                    <div class="pagination-dot-wrap dark">
                        <button type="button" class="btn-dot">
                            <div class="dot active"></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                        <button type="button" class="btn-dot">
                            <div class="dot "></div>
                        </button>
                    </div>
                </div>
              
                <div class="data-wrap">
                    <h3 class="title ellipsis">{product.name}</h3>
                    <div class="detail-container">
                        <div class="detail-wrap">
                            <div class="rating">
                                <div class="tiket-rating-wrap">
                                    <div class="tiket-rating">8.2</div>
                                    <div class="tiket-impression">Impressive</div>
                                </div>
                            </div>
                            <div class="benefit">
                                <div class="info-item"><img src="https://static.tiket.photos/image/upload/v1576735640/hotel/statis/facility/2019/12/19/ca24cf8b-7821-4320-a547-602eda339f40-1576735640066-120fd6acf668fe2b4f56747486d2c8f1.png" width="10"></img><span class="ellipsis info-item-name">Free Cancellation</span></div>
                                <div class="info-item"><img src="https://static.tiket.photos/image/upload/v1576735732/hotel/statis/facility/2019/12/19/cca516f1-c920-4aed-bc0d-d09a3d9e2d74-1576735731773-4a638c04e5f56a31708e2cad7bd1c4ef.png" width="10"></img><span class="ellipsis info-item-name">Free Wifi</span></div>
                                <div class="show-more">+1</div>
                            </div>
                            <div class="facilities"><img src="https://static.tiket.photos/image/upload/v1539681519/hotel/statis/facility/2018/10/16/3c9022f6-d1c8-414e-8d2e-e90484cc40390873121c204d1b6ee2495c5a99aab666.png" alt=""></img><img src="https://static.tiket.photos/image/upload/v1539682180/hotel/statis/facility/2018/10/16/1c300187-df04-465e-bd39-f27eacf414429656405953c88debf54970ec81c007d3.png" alt=""></img><img src="https://static.tiket.photos/image/upload/v1539681442/hotel/statis/facility/2018/10/16/d080f04d-175a-44eb-9b90-b1e9728c12455f5a1bcbbe7f7e2adb20ee221e5864c1.png" alt=""></img><img src="https://static.tiket.photos/image/upload/v1539682634/hotel/statis/facility/2018/10/16/18ba0b9d-5f3c-4543-9f01-12a22f2cae3b91fbc4d1e84f2fabce51d30a73ec924f.png" alt=""></img><img src="https://static.tiket.photos/image/upload/v1539681726/hotel/statis/facility/2018/10/16/3f42adf1-eba4-4443-9492-ba08466b7a41b579d7f19352c0b56b1b2c9c058091e7.png" alt=""></img><img src="https://static.tiket.photos/image/upload/v1539681766/hotel/statis/facility/2018/10/16/20e7cf9b-5c4c-4375-9e0e-47ff31e8117533ad794a0fbc95c461f9ace0d1f379db.png" alt=""></img><img src="https://static.tiket.photos/image/upload/v1539681686/hotel/statis/facility/2018/10/16/6232b0ac-5ecf-449d-8beb-889cb25f68d1642a628e9a5209094d0e5538a146cc99.png" alt=""></img></div>
                        </div>
                        <div class="price-wrap">
                            <div class="lit-price">
                                <div class="ellipsis">Select Vehicles 💙</div>
                            </div>
                            <div class="before-price">{symbol}{product.price}</div>
                            <div class="after-price"><span>{symbol}</span>{product.price-(product.price*product.discount/100)}</div>
                            <div class="desc-price">Per room per night</div>
                            <div class="red-small-text">Only 3 rooms left!</div>
                        </div>
                    </div>
                </div>
                
        </div>
        </Link>

                    
        )
    }
}

export default ProductListItem;