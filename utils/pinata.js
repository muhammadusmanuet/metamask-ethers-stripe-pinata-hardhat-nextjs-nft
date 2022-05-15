const PINATA_BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0ZDY1YTk2NS0wN2M5LTQwMzgtOTc0Yy1iZTExOTI1ODJiY2IiLCJlbWFpbCI6Im11aGFtbWFkdXNtYW4yODUxMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOTNkZjI0MjQ4OTNkMWZlYmM3ZDgiLCJzY29wZWRLZXlTZWNyZXQiOiI4NDhlMzcxMGE5ZjUzZTEwZGNmYTE4NmU3NzQzZTI2YWYzMzYyN2QzMzAyZTUyN2ZiMTE0ODc0ZGRlYmM4ZTZmIiwiaWF0IjoxNjUyNTUxMTI5fQ.e1hSqQCOhHQ1qc-6H_WBgjphwi0_Yw7_meOcYhCh3Sw";

export async function uploadFileToPinata(filePath) {
  if (!filePath) return;
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${PINATA_BEARER_TOKEN}`);

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
