import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";

class CollectionLeftSidebar extends Component {

    state = {
        layoutColumns:3
    }

    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns:colums
        })
    }
    componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 500);
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 120) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            }else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
        
    }
    

    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    
    render (){
        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Bookings | Cheap Campervan Hire</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}
                
                <div class="search-result hotel-search-list">
                
               
                    <div className="collection-wrapper">
                        
                    <div id="sticky" class="header-search-wrapper sticky">
    <div class="widget-container header">
        <div tabindex="-1" class="widget-hotel">
            <div class="widget-section">
                <div class="widget-section-item section-left">
                    <div class="widget-input">
                        <label class="label">Pickup Location</label>
                        <div class="input-container"><i class="fas fa-map-marker-smile icon"></i>
                            <input id="destination-input" value="Bali" placeholder="Staying anywhere?" name="destination" autocomplete="off" class="destination-input input "></input>
                        </div>
                        <div id="destination">
                            
                        </div>
                        <div class="tix-pop-over top-bottom hide"></div>
                    </div>
                </div>
                <div class="widget-section-item section-center">
                    <div class="staying-date-input-wrapper">
                        <div class="widget-input">
                            <label class="label">Pickup Date & Time</label>
                            <div class="input-container"><i class="fas fa-calendar-week icon"></i>
                                <input id="date-input-startdate" value="Sat, 02 May 2020" name="checkinDate" readonly="" autocomplete="off" class="date-input input "></input>
                            </div>
                            
                            <div class="tix-pop-over top-bottom hide"></div>
                        </div>
                        <div class="night-counter-container">
                            <div class="night-content"><i class="tix tixicon tixicon-hotel-night night-icon"></i><span>1</span></div>
                            <div class="night-content">Night</div>
                        </div>
                        <div class="widget-input">
                            <label class="label">Return Date & Time</label>
                            <div class="input-container"><i class="fas fa-calendar-week icon"></i>
                                <input id="date-input-enddate" value="Sun, 03 May 2020" name="checkoutDate" readonly="" autocomplete="off" class="date-input input "></input>
                            </div>
                            
                            <div class="tix-pop-over top-bottom hide"></div>
                        </div>
                    </div>
                </div>
                <div class="widget-section-item section-right">
                    <div class="widget-input">
                        <label class="label">Room &amp; Guest</label>
                        <div class="input-container"><i class="tix tixicon tixicon-roomguest icon"></i>
                            <input id="guestAndRoom" value="1 Room, 1 Guest" name="guestAndRoom" readonly="" autocomplete="off" class="undefined input "></input>
                        </div>
                        
                        <div class="tix-pop-over top-bottom hide"></div>
                    </div>
                </div>
                <div class="widget-section-item button-container">
                    <button type="button" class="button default secondary">Search</button>
                </div>
            </div>
        </div>
    </div>

</div>
                        
                        <div className="container middleCntr">
                        <div class="search-content">
                        
                            <div className="content row">
                            <div class="col-md-4">
                            <StickyBox offsetTop={150} offsetBottom={0}>
                                <div id="sticki" className="col-filter list-horizontal__top brdf5 greybg ">
                                <div class="filter">
                                
                                <div class="content-filter">
                                <div class="field">
                                <div class="filter-text">
                                <input type="text" class="filter-text__input" placeholder="Search vehicles"></input><i class="far fa-search"></i></div>
                                </div>
                                <hr></hr>
                                <div class="field">
                                    <div class="filter-slider">
                                        <div class="collapse-label">Filter by</div>
                                         <div class="margin"></div>
                                         <div class="text-duration ">Price range per day:</div>
                                     </div>
                                </div>
                         
                                        <div>
                                            <Filter/>
                                            {/*<NewProduct/>*/}
                                            
                                        </div>
                            
                                    {/*side-bar banner end here*/}
                                </div>
                                </div>
                                </div>
                                </StickyBox>
                                </div>
                                <div class="col-md-8">
                                <div className="col-list list-horizontal__top">
                               
                                   
                                        
                                            
                                                    
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                               
                                                                    <div className="col-xl-12">
                                                                        <div className="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"></i> Filter</span>
                                                                        </div>
                                                                    </div>
                                                                
                                                                
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)}/>
                                                                    
                                                            </div>
                                                        </div>

                                                        {/*Products Listing Component*/}
                                                        <ProductListing colSize={this.state.layoutColumns}/>

                                                    </div>
                                                
                                            
                                        
                                 </div>   
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                
            </div>
            </div>
        )
    }
}

export default CollectionLeftSidebar;