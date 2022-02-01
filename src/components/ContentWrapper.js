import React from 'react';
//import TopBar from './TopBar';
import TopBarBT from './TopBarBT'
import ContentRowTop from './ContentRowTop';
import Products from './Products';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBarBT />
                    <ContentRowTop />
                    <Products/>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;