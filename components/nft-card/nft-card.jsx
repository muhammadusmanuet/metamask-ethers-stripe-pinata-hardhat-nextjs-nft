import React, { useState } from "react";
import Modal from "../Modal/modal";

const NftCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card" key={id}>
      <div className="nft__img">
        <img
          src={"https://cloudflare-ipfs.com/ipfs/" + imgUrl}
          alt=""
          className="w-100"
        />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <a href={`/market/${id}`}>{title}</a>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ETH</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          {false ? (
            <p>Sold Out</p>
          ) : (
            <button
              className="bid__btn d-flex align-items-center gap-1"
              onClick={() => setShowModal(true)}
            >
              <i class="ri-shopping-bag-line"></i> Place Bid
            </button>
          )}

          {showModal && (
            <Modal setShowModal={setShowModal} nftItem={props.item} />
          )}

          <span className="history__link">
            <a href="#">View History</a>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          @media only screen and (max-width: 992px) {
            .nft__title {
              font-size: 0.8rem !important;
            }

            .creator__info h6 {
              font-size: 0.6rem !important;
            }

            .creator__info p {
              font-size: 0.7rem !important;
            }

            .bid__btn {
              padding: 4px 20px !important;
              font-size: 0.6rem !important;
            }
            .history__link a {
              font-size: 0.6rem !important;
            }

            .single__nft__card {
              padding: 20px;
              background: #343444;
              border-radius: 10px;
            }

            .nft__img img {
              border-radius: 10px;
            }

            .nft__img {
              margin-bottom: 15px;
            }

            .nft__title {
              margin-bottom: 15px;
            }

            .nft__title a {
              color: #fff;
              font-size: 1rem;
              text-decoration: none;
            }

            .nft__title a:hover {
              color: #fff;
            }

            .creator__img {
              width: 40px;
              height: 40px;
            }

            .creator__info h6 {
              font-size: 0.7rem;
              color: rgba(255, 255, 255, 0.772);

              margin-bottom: 0;
              font-weight: 300;
            }

            .creator__info p {
              font-size: 0.9rem;
              color: #fff;

              margin-bottom: 0;
              font-weight: 500;
            }

            .bid__btn {
              border: none;
              outline: none;
              padding: 5px 22px;
              background: transparent;
              border: 1px solid #5142fc;
              font-size: 0.9rem;
              color: #fff;
              border-radius: 50px;
              transition: 0.3s;
              background: #5142fc;
            }

            .bid__btn:hover {
              background: #fff;
              color: #5142fc;
            }

            .history__link a {
              text-decoration: none;
              color: rgba(255, 255, 255, 0.772);

              font-size: 0.9rem;
            }

            .history__link a:hover {
              color: #fff;
            }

            .live__auction__top h3 {
              color: #fff;
            }

            .live__auction__top span a {
              text-decoration: none;
              color: #fff;
              border-bottom: 1px solid #5142fc;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NftCard;
