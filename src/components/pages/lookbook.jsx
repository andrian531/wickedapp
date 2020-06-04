import React, {Component} from 'react';
import Slider from 'react-slick';

import Breadcrumb from "../common/breadcrumb";
const Collapse = window.Collapse;
const cx = window.classNames;
const log = console.log;
class aboutUs extends Component {

    constructor (props) {
        super (props)

    }
    render (){


        return (
            <div>
                {/*<Breadcrumb title={'Lookbook'}/>*/}
                
                
                {/*about section*/}
                <div className="lookbook-section lookbook">
               
                <div class="search-result">
                    <div class="sticky-outer-wrapper active">
                        <div class="sticky-inner-wrapper">
                            <div class="search-preview">
                                <div class="container">
                                    <div class="search-preview-selected row">
                                        <div class="align-self-center col">
                                            <div class="row">
                                                <div class="icon-container align-self-center col-1">
                                                    <div class="circle-icon icon-logo">
                                                        <div class="icon"><i class="far fa-car fa-lg"></i></div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="row">
                                                        <p class="title-text">Adelaide</p>
                                                    </div>
                                                    <div class="row">
                                                        <p class="subtitle-text">Rab, 22 Apr 2020 - Rab, 22 Apr 2020<span>•</span>1 days</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="button-col align-self-center col">
                                            <div class="pull-right row"><a color="grey" class="v3-btn v3-btn__grey" href="/">CHANGE SEARCH</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="search-content">
                            <nav class="" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item-inactive breadcrumb-item">Adelaide</li>
                                    <li class="active breadcrumb-item" aria-current="page">Search Result</li>
                                </ol>
                            </nav>
                            <div class="content row">
                                ss<div class="col-filter list-horizontal__top">
                                    <div class="filter">
                                        <div class="box-reset">
                                            <div class="text-filter">Filter</div>
                                            <div id="btn-reset">RESET</div>
                                        </div>
                                        <form>
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
                                                        <div class="text-duration ">Price range per day:
                                                            <p class="price-range">IDR 0 - IDR 2.000.000</p>
                                                        </div>
                                                        <div class="rc-slider tiket-slider">
                                                            <div class="rc-slider-rail"></div>
                                                            <div class="rc-slider-track rc-slider-track-1"></div>
                                                            <div class="rc-slider-step"></div>
                                                            <div tabindex="0" class="rc-slider-handle rc-slider-handle-1" role="slider" aria-valuemin="0" aria-valuemax="2000000" aria-valuenow="0" aria-disabled="false"></div>
                                                            <div tabindex="0" class="rc-slider-handle rc-slider-handle-2" role="slider" aria-valuemin="0" aria-valuemax="2000000" aria-valuenow="2000000" aria-disabled="false"></div>
                                                            <div class="rc-slider-mark"></div>
                                                        </div>
                                                        <div class="text-min-max false"><span class="text-min">IDR 0</span><span class="text-max">IDR 2.000.000</span></div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div class="field">
                                                    <div class="category-filter">
                                                        <div class="collapse-label">Passenger Capability<i class="far fa-chevron-up tixicon-down"></i></div>
                                                        <div class="list-category">
                                                            <div class="ReactCollapse--content">
                                                                <div class="margin"></div>
                                                                <button class="btn grey category-btn" value="0">All</button>
                                                                <button class="btn secondary category-btn" value="1">&lt; 5 Passenger</button>
                                                                <button class="btn secondary category-btn" value="2">5 - 6 Passenger</button>
                                                                <button class="btn secondary category-btn" value="3">&gt; 6 Passenger</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div class="field">
                                                    <div class="checkbox">
                                                        <div class="collapse-label">Vehicles Type<i class="far fa-chevron-up tixicon-down"></i></div>
                                                        <div class="list-checkbox">
                                                            <div class="ReactCollapse--content">
                                                                <div class="margin"></div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="7bf3e6d0-b831-474e-8883-3d9cbcb4fa32" name="brands|7bf3e6d0-b831-474e-8883-3d9cbcb4fa32" type="checkbox"></input>
                                                                        <label for="7bf3e6d0-b831-474e-8883-3d9cbcb4fa32">Campervan</label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="81d41c21-b27f-4eb5-8c7e-f8083b1c258e" name="brands|81d41c21-b27f-4eb5-8c7e-f8083b1c258e" type="checkbox"></input>
                                                                        <label for="81d41c21-b27f-4eb5-8c7e-f8083b1c258e">4WD</label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="a9c32a63-b8fe-4e09-8680-9f02c5cc69a1" name="brands|a9c32a63-b8fe-4e09-8680-9f02c5cc69a1" type="checkbox"></input>
                                                                        <label for="a9c32a63-b8fe-4e09-8680-9f02c5cc69a1">Cars</label>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div class="field">
                                                    <div class="checkbox">
                                                        <div class="collapse-label">Model<i class="far fa-chevron-up tixicon-down"></i></div>
                                                        <div class="list-checkbox">
                                                            <div class="ReactCollapse--content">
                                                                <div class="margin"></div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="e71c597b-6f58-4cea-b681-c0ee8fa69718" name="models|e71c597b-6f58-4cea-b681-c0ee8fa69718" type="checkbox"></input>
                                                                        <label for="e71c597b-6f58-4cea-b681-c0ee8fa69718">Authentic</label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="0fc64da8-b1cf-47ca-bc36-f8e942c77c8c" name="models|0fc64da8-b1cf-47ca-bc36-f8e942c77c8c" type="checkbox"></input>
                                                                        <label for="0fc64da8-b1cf-47ca-bc36-f8e942c77c8c">No Slogan </label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="ef9c2612-ae38-44e9-b867-1368158cefb1" name="models|ef9c2612-ae38-44e9-b867-1368158cefb1" type="checkbox"></input>
                                                                        <label for="ef9c2612-ae38-44e9-b867-1368158cefb1">Plain</label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="0bac2841-526c-498f-89b5-f7742fc5f096" name="models|0bac2841-526c-498f-89b5-f7742fc5f096" type="checkbox"></input>
                                                                        <label for="0bac2841-526c-498f-89b5-f7742fc5f096">Budget </label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="d9cb968a-2597-401e-9328-d6b1d051ce76" name="models|d9cb968a-2597-401e-9328-d6b1d051ce76" type="checkbox"></input>
                                                                        <label for="d9cb968a-2597-401e-9328-d6b1d051ce76">Premium</label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="f8301374-0a2d-4ffa-836b-34484461a44c" name="models|f8301374-0a2d-4ffa-836b-34484461a44c" type="checkbox"></input>
                                                                        <label for="f8301374-0a2d-4ffa-836b-34484461a44c">Mini Campers</label>
                                                                    </div>
                                                                </div>
                                                                <div class="custom-checkbox single filtering-checked">
                                                                    <div class="check">
                                                                        <input id="b93a9fcb-d852-48e4-9f4d-4335fa0c4dfb" name="models|b93a9fcb-d852-48e4-9f4d-4335fa0c4dfb" type="checkbox"></input>
                                                                        <label for="b93a9fcb-d852-48e4-9f4d-4335fa0c4dfb">CARS</label>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-list list-horizontal__top">
                                    <div class="search-result-title">
                                        <h1 class="title">Choose Vehicles rental in Adelaide</h1>
                                        <p class="date">Rab, 22 Apr '20</p>
                                    </div>
                                    <div class="sort row">
                                        <div class="text-showing col-8">Showing 23 Vehicles types</div>
                                        <div class="text-sort col-4">
                                            <button class="float-right">Sort by<i class="far fa-filter tixicon-sort"></i></button>
                                            <div class="sort-list">
                                                <form action="">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="recommendation" name="sort" value="recommendation" checked=""></input><i class="tixicon-check"></i>
                                                            <label for="recommendation">Rekomendasi</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="highestPrice" name="sort" value="highestPrice"></input><i class="tixicon-check"></i>
                                                            <label for="highestPrice">Harga tertinggi</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="lowestPrice" name="sort" value="lowestPrice"></input><i class="tixicon-check"></i>
                                                            <label for="lowestPrice">Harga terendah</label>
                                                        </li>
                                                    </ul>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Daihatsu All New Xenia di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/wicked-van-2/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Wicked Van 2</h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="fal fa-user-circle icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="fal fa-suitcase icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Starts From</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                
                                
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/wicked-van-2-3-black/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Wicked Van 2-3 Black </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Starts From</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/mystery-machine-2/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Mystery Machine 2 </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Starts From</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/mystery-machine-2-3/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Mystery Machine 2-3 </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Starts From</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/aventus-2/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Aventus 2</h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Starts From</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/bondi-safari-awd-3-5/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Bondi Safari AWD 3-5 </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Mulai dari</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/grip-2-5-4x4/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Grip 2-5 4X4 </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Mulai dari</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/bondi-compact-3/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Bondi Compact 3 </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Mulai dari</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/allridey-car/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">Allridey Car </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Mulai dari</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-list-item">
                                        <div class="row">
                                            <div class="car-image-container clickable col-3"><img alt="Sewa mobil Toyota All New Alphard Transformer  di Bali" class="car-image" src="https://www.wickedcampers.com.au/bookings/images/galleries/12-seater-tour-bus/0.jpg"></img></div>
                                            <div class="car-information col">
                                                <div class="row">
                                                    <div class="col">
                                                        <h3 class="car-name clickable">12-Seater Tour Bus </h3></div>
                                                </div>
                                                <div class="row">
                                                    <div class="passenger-information col"><span class="passenger-span"><i class="tixicon-Passenger icon"></i>6</span>
                                                        <div class="tooltip-box passenger-tooltip">
                                                            <div class="tooltip-box-content">
                                                                <div class="triangle left"></div>Penumpang: 6</div>
                                                        </div><span class="dot">•</span><span class="baggage-span"><i class="tixicon-baggage icon"></i>2<div class="tooltip-box baggage-tooltip"><div class="tooltip-box-content"><div class="triangle left"></div>Bagasi: 2</div></div></span></div>
                                                </div>
                                            </div>
                                            <div class="car-price col">
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="gray-mini-text float-right start-from-text">Mulai dari</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <p class="price-text float-right">$35.75<sup class="gray-mini-text">/day</sup></p>
                                                    </div>
                                                </div>
                                                <div class="float-right row"><a class="v3-btn v3-btn__yellow" color="yellow" href="/">Select</a></div>
                                            </div>
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

export default aboutUs