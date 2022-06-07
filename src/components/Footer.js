import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon } from 'mdbreact';
import '../styles/footer.css'

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left p-3">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">MyTinerary</h5>
            <img
              alt="logo"
              className="logo"
              src={process.env.PUBLIC_URL+'/assets/images/logo-oso.png'}
            />
          </MDBCol>
          <MDBCol md="6" className="links">
              <div className="caja-redes">
                <MDBIcon icon="instagram" className="redes" />
                <MDBIcon icon="twitter" className="redes" />
                <MDBIcon icon="youtube" className="redes" />
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 bg-black">
        <MDBContainer fluid className="text-white">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com" className="text-white text-decoration-none"> MyTinerary.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;