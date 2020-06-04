import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class TopBarDark extends Component {


    render() {
        return (
            <div className="top-header-new">
            <div className="container">
            <div className="row justify-content-between px-2 px-sm-0">
            <a className="navbar-brand rounded" href="/"><img src="../assets/images/wicked-basic.png" alt=""></img></a>
            <h3 className="red-text my-auto font-weight-bold phone-number"><i class="fas fa-user-headset mr-2" aria-hidden="true"></i>1800 24 68 69</h3>
          </div>
            </div>
        </div>
        )
    }
}


export default TopBarDark;