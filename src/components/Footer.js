import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon } from 'mdbreact';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import InstagramIcon from '@mui/icons-material/Instagram';
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
              src="https://us.123rf.com/450wm/morys/morys1810/morys181000067/112955933-arte-del-vector-de-la-mascota-del-oso-imagen-sim%C3%A9trica-frontal-de-oso-que-parece-peligroso-icono-mon.jpg?ver=6"
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