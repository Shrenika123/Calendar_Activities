import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
    render() {
      // Render nothing if the "show" prop is false
      if(!this.props.click) {
        return null;
      }
  
      // The gray background
      const backdropStyle = {
        position: "fixed", /* Positioning and size */
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundcolor: "rgba(128,128,128,0.5)", /* color */
  display: "none", /* making it hidden by default */
      };
  
      // The modal "window"
      const modalStyle = {
        position: "fixed", /* positioning in center of page */
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%,-50%)",
  height: "400px", /* size */
  width: "600px",
  backgroundcolor: "white", 
      };
  
      return (
        <div className="backdrop" style={{backdropStyle}}>
          <div className="modal" style={{modalStyle}}>
            {this.props.children}
  
            <div className="footer">
             
            </div>
          </div>
        </div>
      );
    }
  }
  
  Modal.propTypes = {
    
    click: PropTypes.bool,
    children: PropTypes.node
  };
  
  export default Modal;