import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "./index.css"
class TipButton extends Component {
  state = {
    modalOpen: false,
    amount: "15"
  }

  // Open and close the modal
  toggleModal = () => this.setState(state => ({
    modalOpen: !state.modalOpen
  }))

  // Update the amount of Near to send
  updateAmount = amount => this.setState({ amount: amount.toString() });

  render() {
    const {
      receiver,
      sendNear
    } = this.props;
    const {
      amount,
      modalOpen
    } = this.state;

    return (
      <>
        <button
          className="tip"
          onClick={this.toggleModal}
        >
          Buy for 15 Ⓝ
        </button>

        <Modal
          className=""
          size="md"
          centered
          show={modalOpen}
          onHide={this.toggleModal}
        >
          <div className="modal1">
            <div className="modal2">
              <div className="modal3"
              onClick={this.toggleModal}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" fill="#E2E8F0">
                    </path>
                    </svg>
                    </div>
                    </div>
                    <div>
                      <h1 className="confirm">Confirm Buy</h1>
                      <p className="modal4">You are about to purchase <b>Grimms Army #25</b>
                      </p>
                      <div className="modal5">
                        <div class="mt-2 text-sm text-red-500">
                          </div>
                          </div>
                          <div className="modal6">
                            <div className="modal7">
                              <div className="modal8">
                                <div class="text-sm">Total</div>
                                <div class="text">15 Ⓝ</div>
                                </div>
                                </div>
                                </div>
                                <p class="text-white mt-4 text-sm text-center opacity-90 px-4">You will be redirected to your wallet to confirm your transaction.</p>
                                <div className="modal9">
                                  <button 
                                  className="mdlbtn1" 
                                  onClick={() => sendNear(amount, receiver)}
                                  disabled={amount === "0"}
                                  >Buy</button>
                                  
                                  <button className="mdlbtn2" onClick={this.toggleModal}>Cancel</button>
                                  </div>
                                  </div>
                                  </div>
        </Modal>
      </>
    );
  }
}

export default TipButton;
