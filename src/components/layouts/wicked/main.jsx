import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import {Link} from 'react-router-dom';
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"
// Import custom components
import Collection from "./collection"
import LogoBlock from "../common/logo-block"
import BlogSection from "../common/blogsection";
import HeaderThree from "../../common/headers/header-three"
import FooterTwo from "../../common/footers/footer-two"
import ThemeSettings from "../../common/theme-settings"
import Breadcrumb from '../../common/breadcrumb';
import Select from 'react-select';
import ReviewSection from '../common/reviewsection';
import $ from 'jquery';




const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '2px dotted green',
      color: state.isSelected ? 'yellow' : 'black',
      backgroundColor: state.isSelected ? 'green' : 'white'
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
    })
  }
const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' } 
  ];
  
class Pets extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggle: true};
        this.handleClick = this.handleClick.bind(this);

        this.state={
            show:false
        }
       
        this.toggle = this.toggle.bind(this);
       this.state = { collapse: 1, cards: [1, 2, 3, 4, 5] };
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);

        
       
      }
      handleClick(e) {
        this.setState({isToggle: !this.state.isToggle});
      }
     
      scrollTop()
{
    window.scrollTo({
        top: 469,
        behavior: "smooth"
    });
}
      
      toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
      }  
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }
    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color15.css` );
    }
    

    render(){
        const {cards, collapse} = this.state;
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 12000
          };
        return (
            <div>
                <Helmet>
                    <title>Wicked Campers | Campervan Hire</title>
                </Helmet>
                
                
                <HeaderThree logoName={'logo.png'} />
                <section className="p-0">
                     <Slider className="home-slider" ref={slider => (this.slider = slider)} {...settings}>
                     
                        <div>
                        <a className="slider-item" href="#" tabIndex="-1"><img className="slider-image" src={`${process.env.PUBLIC_URL}/assets/images/slide/gigi.jpg`} alt="Promo RedDoorz"></img></a>
                        </div>
                    </Slider>
                </section>
                <div class="home-page">
              
            
                
               
                <section className="banner-padding absolute-banner pb-0">
                {
                  this.state.show?  <div class="home-page-widget-overlay show" onClick={()=>{this.setState({show:false,isToggle:false})}}></div> : null
              }
                
                <div className="header-data true"><div className="header-v3">
                
                    <div className="container absolute-bg">
                   
                   
        
                    <div onClick={()=>{this.setState({show:true})}}>{ this.state.show? '' : ''}
                    
                    <a className="scroll-to-top rounded" style={{display: "inline"}} onClick={this.scrollTop}>

                    <div id="productWidget" className="product-widget widget-container focus" tabIndex="0">
                   
                    
            
                    
    <div className="product-list-container">
        <div className="product-list-title"><span>Get A Quote And Book Now</span><br></br>
           <span className="bold-title">To Save UP To 30% Off The Daily Rate</span></div>
        <div className="product-list-content">
            <div className="product-box" tabIndex="-1">
                <div className="product-logo"><img src="https://www.wickedcampers.com/images/au/authumb/thumbnaugty.jpg" alt="Campervan"></img></div><span className="product-label">Campervan</span></div>
            <div className="product-box" tabIndex="-1">
                <div className="product-logo"><img src="https://www.wickedcampers.com/images/au/4wd-thumb/fj.jpg" alt="4wd"></img>
                </div><span className="product-label">4WD</span></div>
            <div className="product-box" tabIndex="-1">
                <div className="product-logo"><img src="https://www.wickedcampers.com/images/bondi-mini-3.jpg" alt="mini camper"></img></div><span className="product-label">Mini Camper</span></div>
            <div className="product-box" tabIndex="-1">
                <div className="product-logo"><img src="https://www.wickedcampers.com.au/bookings/images/galleries/12-seater-tour-bus/0.jpg" alt="bus hire"></img></div><span className="product-label">Bus</span></div>
            <div className="product-box" tabIndex="-1">
                <div className="product-logo"><img src="https://www.wickedcampers.com/images/au/allridey-i20.jpg" alt="car hire"></img></div><span className="product-label">Car Hire</span></div>
            
        </div>
    </div>
    <div className="product-form">
    
    <div class="form-style">
    <div class="switcher "><i class="fas fa-exchange-alt"></i></div>
    <div class="part-component part-depart">
        <div class="title">Pickup Location</div>
        <div class="content">
            <div class="icon"><i class="fas fa-map-marker-smile"></i></div>
            <div class="user-area">
                <div class="station-list-area">
                
                <input type="text" onClick={this.handleClick} class="input-airport " value="" placeholder="Adelaide" readonly="" tabindex="-1" disabled=""></input>
                <div style={{display: this.state.isToggle ? 'block': 'none'}}>
        
        <div class="station-list-box fadeInDown-enter-done">
        <div class="head">Select City or Station<i class="tix tix-cancel icon-close" onClick={this.handleClick}></i></div>
        <div class="content">
        
        </div>
    </div>
    </div> 
                
                </div>
            </div>
            
        </div>
    </div>
    <div class="part-component part-return">
        <div class="title">Return Location</div>
        <div class="content">
            <div class="icon"><i class="fas fa-map-marker-smile"></i></div>
            <div class="user-area">
                <div class="station-list-area">
                    <input type="text" onClick={this.handleClick} class="input-airport " value="" placeholder="Adelaide" readonly="" tabindex="-1" disabled=""></input>
                    <div style={{display: this.state.isToggle2 ? 'block': 'none'}}>
        
        <div class="station-list-box fadeInDown-enter-done">
        <div class="head">Select City or Station<i class="tix tix-cancel icon-close" onClick={this.handleClick}></i></div>
        <div class="content">
            <div class="title">Popular</div>
            <ul class="list-box">
                <li class="city" data-stationcode="ALL" data-stationname="Bandung" data-cityname="Bandung">
                    <div class="station-icon"><i class="tix tix-city"></i></div>
                    <div class="station-text">
                        <div class="station-city">Adelaide</div>
                     
                    </div>
                    <div class="station-code">ALL</div>
                </li>
                <li class="city" data-stationcode="ALL" data-stationname="Jakarta" data-cityname="Jakarta">
                    <div class="station-icon"><i class="tix tix-city"></i></div>
                    <div class="station-text">
                        <div class="station-city">Jakarta</div>
                       
                    </div>
                    <div class="station-code">ALL</div>
                </li>
                <li class="" data-stationcode="BD" data-stationname="Bandung" data-cityname="Bandung">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Bandung</div>
                      
                    </div>
                    <div class="station-code">BD</div>
                </li>
                <li class="" data-stationcode="AWN" data-stationname="Arjawinangun" data-cityname="Cirebon">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Cirebon</div>
                        
                    </div>
                    <div class="station-code">AWN</div>
                </li>
                <li class="" data-stationcode="GMR" data-stationname="Gambir" data-cityname="Jakarta">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Jakarta</div>
                       
                    </div>
                    <div class="station-code">GMR</div>
                </li>
                <li class="" data-stationcode="PSE" data-stationname="Pasar&nbsp;Senen" data-cityname="Jakarta">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Jakarta</div>
                       
                    </div>
                    <div class="station-code">PSE</div>
                </li>
                <li class="" data-stationcode="SMT" data-stationname="Semarangtawang" data-cityname="Semarang">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Semarang</div>
                       
                    </div>
                    <div class="station-code">SMT</div>
                </li>
                <li class="" data-stationcode="SGU" data-stationname="Surabaya&nbsp;Gubeng" data-cityname="Surabaya">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Surabaya</div>
                        
                    </div>
                    <div class="station-code">SGU</div>
                </li>
                <li class="" data-stationcode="BBN" data-stationname="Brambanan" data-cityname="Yogyakarta">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Yogyakarta</div>
                       
                    </div>
                    <div class="station-code">BBN</div>
                </li>
                <li class="" data-stationcode="LPN" data-stationname="Lempuyangan" data-cityname="Yogyakarta">
                    <div class="station-icon"><i class="tix tix-train-station"></i></div>
                    <div class="station-text">
                        <div class="station-city">Yogyakarta</div>
                       
                    </div>
                    <div class="station-code">LPN</div>
                </li>
            </ul>
        </div>
    </div>
    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="part-component part-from-date">
        <div class="title">Pickup Date & Time</div>
        <div class="content">
            <div class="icon"><i class="fas fa-calendar-week"></i></div>
            <div class="user-area">
                <div class="wrapper-datepicker datepicker-depart">
                    <input type="text" class="input-datepicker" value="Sen, 20 Apr 2020" readonly="" tabindex="-1" disabled=""></input>
                </div>
            </div>
        </div>
    </div>
    <div class="part-component part-to-date">
        <div class="title">
           <label>Return Date & Time</label>
        </div>
        <div class="content">
            <div class="icon"><i class="fas fa-calendar-week"></i></div>
            <div class="user-area">
                <div class="wrapper-datepicker datepicker-return">
                    <input type="text" class="input-datepicker" value="Sel, 21 Apr 2020" readonly="" tabindex="-1" disabled=""></input>
                </div>
            </div>
        </div>
    </div>
    <div class="part-component part-passenger">
        <div class="title">Promo Code (optional)</div>
        <div class="content">
            <div class="passenger-and-class-area">
                <input type="text" class="input-passengerclass" tabindex="4" value="code promo if any" readonly=""></input></div>
        </div>
    </div>
</div>
        <div className="product-form-container product-form-button-group">
        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>
            <button className="product-form-search-btn red-gradient"><i class="fas fa-search"></i> Find Now</button>
        </Link>    
        </div>
    </div>
</div>
</a>
</div>
                    </div>
                    </div>
                    </div>
                   
                </section>
                
<div class="feature">         
        <div class="container">
                <div class="feature-box row">
    <div class="list col-sm-6 col-md-6 col-lg-6">
        <div class="feature-image placeholder-image"><img alt="Simple Profile" src="https://en.tiket.com/home-ms/assets/25a69c26.svg"></img></div>
        <div class="feature-info">
            <h3 class="title">Simple Profile</h3>
            <p class="subtitle">Faster booking, one click to fill passenger details.</p>
        </div>
    </div>
    <div class="list col-sm-6 col-md-6 col-lg-6">
        <div class="feature-image placeholder-image"><img alt="Simple Reschedule" src="https://en.tiket.com/home-ms/assets/29fbfd3b.svg"></img></div>
        <div class="feature-info">
            <h3 class="title">Simple Reschedule</h3>
            <p class="subtitle">Reschedule your flight in a few easy steps.</p>
        </div>
    </div>
    <div class="list col-sm-6 col-md-6 col-lg-6">
        <div class="feature-image placeholder-image"><img alt="Simple Booking Process" src="https://en.tiket.com/home-ms/assets/fc5f0f97.svg"></img></div>
        <div class="feature-info">
            <h3 class="title">Simple Booking Process</h3>
            <p class="subtitle">Fuss-free booking anytime and anywhere.</p>
        </div>
    </div>
    <div class="list col-sm-6 col-md-6 col-lg-6">
        <div class="feature-image placeholder-image"><img alt="Simple Refund" src="https://en.tiket.com/home-ms/assets/7d1808db.svg"></img></div>
        <div class="feature-info">
            <h3 class="title">Simple Refund</h3>
            <p class="subtitle">Refund ticket hassle-free via app or web.</p>
        </div>
    </div>
</div>
</div>
</div>     
                {/*Product Section*/}
                {/* <Collection type={'4wd'} title="Campervan Hire and Cheap Car Hire" subtitle=""/> */} 
                {/*
                <section className="p-t-0 ratio2_3">
                   <Collection type={'campervan'} title="Campervan Hire and Cheap Car Hire" subtitle="Enjoy Standardised Accommodations in your Favourite Destinations"></Collection>
                </section>
                 */}
                <section className="section-b-space p-t-0 ratio2_3">
                    <BlogSection title="OUR LOCATIONS" subtitle="Enjoy Standardised Accommodations in your Favourite Destinations"></BlogSection>
                </section>
                {/*Product Section End*/}
                <div class="referral-program-banner zigzag-container" id="now">
    <div class="container">
        <div class="banner-main">
            <div class="row m-b-40">
                
                <div class="col-md-12">
                    <div class="banner-desc">
                    <div class="banner-title">
                        <p class="lead">Unforgettable Holidays</p>
                    </div>
                    <ul class="list-unstyled mb-0">
          
          <hr class="line mx-auto white"></hr>
          <li class="mb-5">
            <h6 class="text-center font-italic mb-0">Australia | New Zealand | North America | South Africa | UK &amp; Europe</h6>
          </li>
          <a href="campervans/australia/authentic.html" class="btn red-gradient white-text font-weight-bold spacing btn-rounded red-shadow waves-effect waves-light">
            <strong>FIND MY RIDE</strong>
          </a>
        </ul>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
                <div className="container">
                
                <ReviewSection></ReviewSection>
                     <div class="seo-internal-link">
    <div class="container">
      
        <div class="row vcenter">
            <div class="col-md-8">
                <div class="heading-link">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div class="heading-content m-t-30">
              
              {cards.map(index => {
                return (
                  <Card style={{ marginBottom: '1rem' }} key={index}>
                    <CardHeader onClick={this.toggle} data-event={index}>Header</CardHeader>
                    <Collapse isOpen={collapse === index}>
                    <CardBody>
                    Anim pariatur cliche reprehenderit,
                     enim eiusmod high life accusamus terry richardson ad squid. Nihil
                     anim keffiyeh helvetica, craft beer labore wes anderson cred
                     nesciunt sapiente ea proident.
                    </CardBody>
                    </Collapse>
                  </Card>
                )
              })}     
              
            </div>
            </div>
            <div class="col-md-4 m-t-5">
                <div class="heading-link">
                    <h2>@Wickedcampers</h2>
                <p><iframe src="https://snapwidget.com/embed/443372" width="100%" height="400" scrolling="no" frameborder="0">
</iframe></p>
                </div>
                        </div>
                        </div>
                        </div>


                    </div>
                     </div> 
                    
                {/*Banner Section*/}
                
                {/*Banner Section End*/}

                

                {/*Parallax banner*/}
                
                {/*Parallax banner end*/}

                {/*Product Slider*/}
               {/*<Collection type={'4wd'} title="SAVE AND EXTRA" />*}
                {/*Product Slider End*/}

               
                <ThemeSettings/>
                <FooterTwo logoName={'logo/14.png'}/>
            </div>
            </div>
            
        )
    }
}


export default Pets;