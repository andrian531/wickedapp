import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import Slider from 'react-slick';
import '../common/index.scss';
import {connect} from "react-redux";

// import custom Components
import Service from "./common/service";
import BrandBlock from "./common/brand-block";
import NewProduct from "../common/new-product";
import Breadcrumb from "../common/breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from '../../actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'



class LeftSideBar extends Component {

    constructor() {
        super();
        this.state = {
            open:false,
            nav1: null,
            nav2: null
        };
    }

    // document.getElementById('idOfElement').classList.add('newClassName');


    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    
    filterClick() {
        document.getElementById("filter").style.left = "-15px";
    }
    backClick() {
        document.getElementById("filter").style.left = "-365px";
    }

    render(){
        const {symbol, item, addToCart, addToCartUnsafe, addToWishlist} = this.props
        var products = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true
        };
        var productsnav = {
            slidesToShow: 3,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>sfdMultiKarto |{item.category} | {item.name} </title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}

                {/*<Breadcrumb  parent={'Product'} title={item.name} />*/}
               
                {/*Section Start*/}
                {(item)?
              
                    <div className="vendordetails">
                        <div class="container tix-py-075">
                          
                       
                        </div>
                 
                        

                        <div className="container">
                        
                                    <div className="row">

                                <div className="col-sm-4 collection-filter col-left" id="filter">
                                <div class="carmodel">
                                <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-slick">
                                                    {item.variants?
                                                    item.variants.map((vari, index) =>
                                                       <div key={index}>
                                                           <ImageZoom image={vari.images} />
                                                       </div>
                                                    ):
                                                    item.pictures.map((vari, index) =>
                                                        <div key={index}>
                                                            <ImageZoom image={vari} />
                                                        </div>
                                                    )}
                                                </Slider>
                                                <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />
                                <div class="carmodel-box"><strong>Isuzu ELF 12 Seat</strong>
                                    <div class="carmodel-spec">
                                        <div class="carmodel-spec-box"><i class="tixicon-profile"></i><span class="carmodel-info-person">16</span><span>passenger</span></div>
                                        <div class="carmodel-spec-box"><i class="tixicon-baggage"></i><span class="carmodel-info-bag">4</span><span>baggage</span></div>
                                    </div>
                                </div>
                            </div>

                                    {/* <BrandBlock/> */}
                                  
                                    {/*side-bar single product slider start*/}
                                   
                                </div>
                                <div className="col-lg-8 col-sm-12 col-xs-12 col-right">
                                    <div className="vendors-profile">
                                    <div className="profile-box">
                                    
                                           
                                                <div className="filter-main-btn mb-2">
                                                    <span onClick={this.filterClick}  className="filter-btn" >
                                                        <i className="fa fa-filter" aria-hidden="true"></i> filter</span>
                                                </div>
                                           
                                       
                                        <div className="row">
                                           
                                            <DetailsWithPrice symbol={symbol} item={item} navOne={this.state.nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} addToWishlistClicked={addToWishlist} />
                                        </div>
                                    </div>
                                    </div>
                                    <DetailsTopTabs item={item} />
                                </div>
                            </div>
                        </div>
                    </div>
                 : ''}
                {/*Section End*/}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        item: state.data.products.find(el => el.id == productId),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist}) (LeftSideBar);