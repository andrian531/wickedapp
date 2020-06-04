import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import {Slider3} from "../../../services/script"

class ReviewSection extends Component {
    render (){
        const {title, subtitle} = this.props;
        return (
            <section className="section-b-space j-box pets-box ratio_square">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="title1 title5">
                                  
                                <div class="content-wrapper">
                                <div class="text-center title">
                                <h3><span translate="hm_customer_count" class="colorRed">1,900,000+</span> <span translate="hm_happy_customer">happy customers</span></h3>
                                </div>
                                </div>
                                <hr role="tournament6" />
                              </div>
                            <Slider {...Slider3} className="slide-3">
                                <div>
                                    <div className="col-md-12">
                                      
                                            <div className="clientComment product-box text-center">
                                            <div class="front"><img src={`${process.env.PUBLIC_URL}/assets/images/review/1.png`} className="img-fluid img-circle" alt="" /></div>
                                            <div class="product-detail text-center "><div><p><i class="fa fa-quote-left"></i><span class="fontSize14"> Always satisfied with RedDoorz’s quality and service. Comfortable rooms, great facilities and strategic location! vvv </span><i class="fa fa-quote-right"></i></p><div class="colorBlack" ng-bind=" ::testimonial.name">Hardiyanto</div></div></div>
                                            </div>
                                       
                
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                       
                                        <div className="clientComment product-box text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/review/2.jpg`} className="img-fluid img-circle" alt="" />
                                                <div class="product-detail text-center "><div><p><i class="fa fa-quote-left"></i><span class="fontSize14"> Always satisfied with RedDoorz’s quality and service. Comfortable rooms, great facilities and strategic location! vvv </span><i class="fa fa-quote-right"></i></p><div class="colorBlack" ng-bind=" ::testimonial.name">Hardiyanto</div></div></div>
                                            </div>
                                      
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                     
                                        <div className="clientComment product-box text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/review/3.jpg`} className="img-fluid img-circle" alt="" />
                                                <div class="product-detail text-center "><div><p><i class="fa fa-quote-left"></i><span class="fontSize14"> Always satisfied with RedDoorz’s quality and service. Comfortable rooms, great facilities and strategic location! vvv </span><i class="fa fa-quote-right"></i></p><div class="colorBlack" ng-bind=" ::testimonial.name">Hardiyanto</div></div></div>
                                            </div>
                                        
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                 
                                    <div className="clientComment product-box text-center">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/review/4.jpeg`} className="img-fluid img-circle" alt="" />
                                            <div class="product-detail text-center "><div><p><i class="fa fa-quote-left"></i><span class="fontSize14"> Always satisfied with RedDoorz’s quality and service. Comfortable rooms, great facilities and strategic location! vvv </span><i class="fa fa-quote-right"></i></p><div class="colorBlack" ng-bind=" ::testimonial.name">Hardiyanto</div></div></div>
                                        </div>
                                  
                                    
                                </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                        <div className="clientComment product-box text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/review/5.png`} className="img-fluid img-circle" alt="" />
                                                <div class="product-detail text-center "><div><p><i class="fa fa-quote-left"></i><span class="fontSize14"> Always satisfied with RedDoorz’s quality and service. Comfortable rooms, great facilities and strategic location! vvv </span><i class="fa fa-quote-right"></i></p><div class="colorBlack" ng-bind=" ::testimonial.name">Hardiyanto</div></div></div>
                                            </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        
                                        <div className="clientComment product-box text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/review/5.png`} className="img-fluid img-circle" alt="" />
                                                <div class="product-detail text-center "><div><p><i class="fa fa-quote-left"></i><span class="fontSize14"> Always satisfied with RedDoorz’s quality and service. Comfortable rooms, great facilities and strategic location! vvv </span><i class="fa fa-quote-right"></i></p><div class="colorBlack" ng-bind=" ::testimonial.name">Hardiyanto</div></div></div>
                                            </div>
                                      
                                       
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                       
                                        <div className="clientComment product-box text-center">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/review/5.png`} className="img-fluid img-circle" alt="" />
                                                <div class="product-detail text-center "><div><p><i class="fa fa-quote-left"></i><span class="fontSize14"> Always satisfied with RedDoorz’s quality and service. Comfortable rooms, great facilities and strategic location! vvv </span><i class="fa fa-quote-right"></i></p><div class="colorBlack" ng-bind=" ::testimonial.name">Hardiyanto</div></div></div>
                                            </div>
                                       
                                       
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ReviewSection;