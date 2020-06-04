import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import LogoImage from "../headers/common/logo"
import {SlideUpDown} from "../../../services/script";
import Instagram from "../../layouts/common/instagram"
class FooterTwo extends Component {

    

    render () {
    
        return (
                <footer className="footer-light pet-layout-footer">
                   
                    <div className="white-layout">
                      
                        <div className="container">
                        <div class="row pt-3 text-left small">
          <div class="col-6 col-md-3">
            <h5 class="footer-heading">Quick Links</h5>
            <ul class="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Bookings</li>
              <li>FAQ</li>
              <li>Policies</li>
            </ul>
          </div>
          <div class="col-6 col-md-3">
            <h5 class="footer-heading">Vehicles</h5>
            <ul class="list-unstyled">
              <li>Wicked Vans</li>
              <li>Bondi Compact</li>
              <li>Mystery Machines</li>
              <li>Aventus</li>
              <li>Armadillo 4WD</li>
              <li>Grip 4WD</li>
            </ul>
          </div>
          <div class="col-6 col-md-4">
            <h5 class="footer-heading">Locations</h5>
            <ul class="list-unstyled">
              <li>Adelaide</li>
              <li>Alice Springs</li>
              <li>Brisbane</li>
              <li>Broome</li>
              <li>Byron Bay</li>
              <li>Cairns</li>
              <li>Darwin</li>
              <li>Exmouth</li>
              <li>Hobart</li>
              <li>Monkey Mia</li>
              <li>Melbourne</li>
              <li>Perth</li>
              <li>Sydney</li>
            </ul>
          </div>
          <div class="col-6 col-md-2">
            <h5 class="footer-heading">Some Menu</h5>
            <ul class="list-unstyled">
              <li>item#1</li>
              <li>item#2</li>
              <li>item#3</li>
              <li>item#4</li>
              <li>item#5</li>
            </ul>
          </div>
        </div>
                        </div>
                    </div>
                    <div className="sub-footer black-subfooter">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-md-9 col-sm-12">
                                    <div className="footer-end">
                                        <p>
                                        Campervan Village Pty Ltd - Discount Camper Rentals, Australia : ABN 31 615 035 777

</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-3 col-sm-12">
                                    <div className="payment-card-bottom">
                                        <ul>
                                            <li>
                                                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        );
    }
}

export default FooterTwo;