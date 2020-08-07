import React,{Component} from 'react'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Display from "../Container/Display"
import './Post.css'

class Post extends Component{
    state={
        open:false
    }

    
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


    render() {
        // console.log(this.props.name)
        return (
            <div>

                <p className="center"  style={{font: "15px"}} onClick={this.onOpenModal}>{this.props.name}</p>

                <Modal open={this.state.open} onClose={this.onCloseModal}>
                    <Display id={this.props.id}/>
                </Modal>
            </div>
        )
    }


}

export default Post;