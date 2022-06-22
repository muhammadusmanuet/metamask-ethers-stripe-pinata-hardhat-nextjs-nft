import React from "react";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "./data";
import NftCard from "../nft-card/nft-card";
import { connectToMetamask } from "../../utils/web3";
import { shortenHex } from "../../utils/shortenHex";
import { AppContext } from "../../context/app.context";

const Trending = () => {
  const context = React.useContext(AppContext);

  const onConnect = async () => {
    const state = await connectToMetamask();
    context.setState(state);
  };

  if (!context?.state?.account)
    return (
      <button className="place__bid-btn" onClick={onConnect}>
        Connect Metamask
      </button>
    );

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="trending__title">
              Your Wallet Address: {shortenHex(context.state.account)}
            </h3>
          </Col>
          <h3 className="trending__title">
            Total Minted: {context?.state?.mintedCount}
          </h3>

          {NFT__DATA.slice(0, 8).map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>
        {`
          .trending__title {
            color: #fff;
          }
        `}
      </style>
    </section>
  );
};

export default Trending;
