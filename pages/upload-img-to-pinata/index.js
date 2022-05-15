import React from "react";
import { uploadFileToPinata } from "../../utils/pinata";

function UploadImgToPinata() {
  const [pinataUrl, setPinataUrl] = React.useState("");

  const handleChange = async (e) => {
    let file = e.target;
    const raw = file.files[0];
    const pinata_url = await uploadFileToPinata(raw);
    setPinataUrl(pinata_url);
  };

  return (
    <div style={{ background: "white" }}>
      {pinataUrl && (
        <p style={{ color: "black" }}>
          Pinata Image URL:{" "}
          <a
            href={"https://gateway.pinata.cloud/ipfs/" + pinataUrl}
            target="_blank"
          >
            QmTbLHK6QPFDWHAW924aTqqU8YHvf7a46BcD8Kp9TEMEog
          </a>
        </p>
      )}
      <input
        type="file"
        id="upload-button"
        className=""
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}

export default UploadImgToPinata;
