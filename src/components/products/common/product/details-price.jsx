import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';


class DetailsWithPrice extends Component {

    constructor (props) {
        super (props)
        this.state = {
            open:false,
            quantity:1,
            stock: 'InStock',
            nav3: null
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.setState({
            nav3: this.slider3
        });
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.item.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){
        const {symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked} = this.props

        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div className="rtl-text">
                 <div className="product-right">
                
               
                  
  
                    {item.variants?
                    <ul >
                        <Slider {...colorsnav} asNavFor={this.props.navOne} ref={slider => (this.slider1 = slider)} className="color-variant">
                            {item.variants.map((vari, i) => {
                                return <li className={vari.color} key={i} title={vari.color}></li>
                            })}
                        </Slider>
                    </ul>:''}
                    
                    <div className="product-description border-product">
                        
                        {item.size?
                            <div>
                                <h6 className="product-title size-text">select size
                                    <span><a href="#" data-toggle="modal"
                                             data-target="#sizemodal" onClick={this.onOpenModal} >size chart</a></span></h6>
                                <div className="modal fade" id="sizemodal" tabIndex="-1"
                                     role="dialog" aria-labelledby="exampleModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered"
                                         role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title"
                                                    id="exampleModalLabel">Sheer Straight
                                                    Kurta</h5>
                                                <button type="button" className="close"
                                                        data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="size-box">
                            <ul>
                                {item.size.map((size, i) => {
                                    return <li key={i}><a href="#">{size}</a></li>
                                })}
                            </ul>
                        </div>
                            </div>:''}
                     
                     
                    </div>
                 
                    <div className="border-product">
                        <h6 className="product-title">product details</h6>
                        <p>{item.shortDetails}</p>ss
                    </div>
                    
                    <div className="border-product">
                    <div id="hotel-detail">
                        <div id="room-list" class="">
                            <div class="tix-column-nowrap">
                                <div class="tix-card tix-mb-125  tix-blue-gradient">
                                    <div class="tix-card-header"><span class="pull-left tix-icon-1 tix-mr-05"><i class="icon-hotel"></i></span><span class="tix-line-height-26">Preferred Hotel 💙</span></div>
                                    <div class="tix-card-body tix-px-0 tix-py-0 room-card">
                                        <div class="rc-thumbnail"><img src="https://www.wickedcampers.com.au/bookings/images/extras/outback-fee.png" alt="Best Western Resort Kuta, Badung"></img></div>
                                        <div class="rc-summary">
                                            <h3 class="tix-text-size-1 tix-text-lh-15 tix-my-075 tix-text-black tix-font-medium">Superior Room</h3>
                                            <div class="col-12 tix-px-0 tix-mb-1"><span class="tix-text-size-0875 tix-mr-2 tix-text-blue pull-left"><span class="rl-icon-sprite rl-free-cancel tix-text-lh pull-left tix-mr-025 tix-text-lh-15"></span>Free Cancellation</span>
                                            </div>
                                            <div class="col-3 tix-px-0 room-info-services tix-mb-1"><span class="tix-font-medium tix-text-size-0875 tix-mb-05">Room Info</span><span class="tix-mb-05"><i class="tixicon-guest tix-text-blue tix-mr-05 tix-text-lh-1 pull-left"></i><span class="tix-text-lh-1 pull-left">Max. 2 Guest</span></span><span class="tix-mb-05"><i class="tixicon-square tix-text-blue tix-mr-05 tix-text-lh-1 pull-left"></i><span class="tix-text-lh-1 pull-left">28m²</span></span><span class="tix-mb-05 tix-row-nowrap tix-pr-1"><i class="tixicon-sofa tix-text-blue tix-mr-05 tix-text-lh-1 pull-left"></i><span class="pull-left bed-type-text">Double bed</span></span>
                                            </div>
                                            <div class="col-3 tix-px-0 room-info-services"><span class="tix-font-medium tix-text-size-0875 tix-mb-05">Free Services</span><span class="tix-mb-05"><i class="tixicon-no-breakfast tix-mr-05 tix-text-light-grey tix-text-lh-1 pull-left"></i><span class="tix-text-lh-1 pull-left tix-text-light-grey">No Breakfast</span></span><span class="tix-mb-05"><i class="tixicon-wifi tix-mr-05 tix-text-blue tix-text-lh-1 pull-left"></i><span class="tix-text-lh-1 pull-left">Free WiFi</span></span>
                                            </div>
                                            <div class="col-12 tix-px-0 rc-detail-btn">
                                                <button class="tix-btn tix-text-light-blue tix-text-size-0875 tix-px-0 tix-font-medium borderless">DETAILS</button>
                                            </div>
                                        </div>
                                        <div class="rc-price"><span class="tix-text-red tix-mb-05">10 room left</span><span><strike class="tix-text-grey tix-mb-025">IDR 650.000</strike><small class="tix-text-grey tix-text-grey tix-text-size-075">/room/night</small></span><span class="tix-mb-05"><span><span class="tix-text-size-1125 tix-text-orange tix-font-medium">IDR 454.999</span><small class="tix-text-grey tix-text-grey tix-text-size-075">/room/night</small></span>
                                            </span>
                                            <button class="btn-book tix-button-2">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                        <div className="product-buttons" >
                        <a className="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity)}>add to cart</a>
                        <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >buy now</Link>
                    </div>
                    </div>
                    
                </div>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                            </div>
                            <div className="modal-body">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}


export default DetailsWithPrice;