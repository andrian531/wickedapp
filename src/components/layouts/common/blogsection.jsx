import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import {Slider3} from "../../../services/script"

class BlogSection extends Component {
    render (){
        const {title, subtitle} = this.props;
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="title1 title5">
                                  
                                  <h2 className="title-inner1">{title}</h2>
                                  {subtitle?<h4>{subtitle}</h4>:''}
                                  <hr role="tournament6" />
                              </div>
                            <Slider {...Slider3} className="slide-3">
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`} className="img-fluid" alt="" />
                                                    <span class="vh-content">Australia</span>
                                            </div>
                                        </Link>
                
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`} className="img-fluid" alt="" />
                                                <span class="vh-content">New Zealand</span>
                                            </div>
                                        </Link>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/3.jpg`} className="img-fluid" alt="" />
                                                <span class="vh-content">UK & Europe</span>
                                            </div>
                                        </Link>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                    <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                        <div className="classic-effect">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/blog/4.jpg`} className="img-fluid" alt="" />
                                            <span class="vh-content">Canada</span>
                                        </div>
                                    </Link>
                                    
                                </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`} className="img-fluid" alt="" />
                                                <span class="vh-content">South America</span>
                                            </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`} className="img-fluid" alt="" />
                                                <span class="vh-content">Africa</span>
                                            </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                                <div>
                                    <div className="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div className="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`} className="img-fluid" alt="" />
                                                <span class="vh-content">Japan</span>
                                            </div>
                                        </Link>
                                       
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
        )
    }
}

export default BlogSection;