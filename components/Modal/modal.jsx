import React from "react";
import { AppContext } from "../../context/app.context";
import { mintToken } from "../../utils/web3";
import StripePayment from "../stripe/stripe-payment";

const Modal = ({ setShowModal, nftItem }) => {
  const context = React.useContext(AppContext);
  const { state } = context;
  const { contract, signer } = state;
  const onPayWithMetamask = async () => {
    if (!contract || !signer) {
      alert("Please connect to Metamask first.");
      return;
    }
    await mintToken(contract, signer, nftItem.imgUrl);
  };

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i
            className="ri-close-line"
            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(false)}
          ></i>
        </span>
        <h6 className="text-center text-light">Buy NFT</h6>
        <p className="text-center text-light">
          Price <span className="money">0.05 ETH</span>
        </p>
        <p className="text-center text-light">
          Name <span className="money">{nftItem.title}</span>
        </p>
        <button className="place__bid-btn" onClick={onPayWithMetamask}>
          Pay With Wallet
        </button>
        <span
          className="money"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          Or
        </span>
        <div>
          <StripePayment />
        </div>
      </div>
      <style jsx>
        {`
          .modal__wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #14141f8a;
            z-index: 4444444;
          }

          .single__modal {
            position: relative;
            top: 50%;
            left: 50%;
            width: 500px;
            height: 350px;
            transform: translate(-50%, -50%);
            background: #343444 !important;
            border-radius: 5px;
            padding: 30px;
            z-index: 5555555 !important;
          }

          .single__modal h6 {
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 10px;
          }

          .single__modal .money {
            color: #fff;
            font-weight: 500;
            font-size: 1.1rem;
          }

          .input__item input {
            width: 100%;
            border: 1px solid rgba(221, 221, 221, 0.274);
            background: transparent;
            color: #fff;
            padding: 9px 25px;
            border-radius: 5px;
            outline: none;
            font-size: 0.8rem;
          }

          .input__item h6 {
            font-size: 0.9rem;
            color: #fff;
          }

          .close__modal {
            position: absolute;
            top: -2px;
            right: -2px;
            z-index: 6666666;
          }

          .close__modal i {
            padding: 5px;
            background: #5142fc;
            color: #fff;
            border-radius: 50%;
          }

          @media only screen and (max-width: 992px) {
            .single__modal {
              width: 300px;
              height: auto;
            }

            .single__modal h6 {
              font-size: 0.9rem;
            }
            .single__modal p {
              font-size: 0.8rem;
              margin-bottom: 0;
            }

            .money {
              font-size: 0.8rem !important;
            }

            .input__item h6 {
              font-size: 0.7rem;
            }

            .input__item input {
              padding: 5px 20px !important;
              font-size: 0.7rem;import { AppContext } from '../../context/app.context';

            }
          }
        `}
      </style>
    </div>
  );
};

export default Modal;
