export async function uploadFileToPinata(filePath) {
  if (!filePath) return;
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.PINATA_BEARER_TOKEN}`
  );

  var formdata = new FormData();
  formdata.append("file", filePath);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const res = await fetch(url, requestOptions);

    const result = await res.json();

    const { IpfsHash } = result;

    let imagePath;
    if (IpfsHash) {
      imagePath = IpfsHash;
    }

    return imagePath;
  } catch (error) {
    return false;
  }
}
