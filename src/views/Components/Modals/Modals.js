import React, {Component} from "react";
import {Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBlock} from "reactstrap";


class Modals extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
	 <Modal isOpen={this.props.modal} toggle={this.props.modelToggle} className={this.props.modelClassName}>
                  <ModalHeader toggle={this.props.modelToggle}>{this.props.modalTitle}</ModalHeader>
                  <ModalBody>
                    {this.props.modalMessage}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.props.primaryButtonAction}>{this.props.modalPrimaryButton}</Button>{' '}
                  </ModalFooter>
                </Modal>
      </div>
    )
  }
}

export default Modals;
