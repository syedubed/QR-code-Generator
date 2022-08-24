import React, { useState } from "react";

const MainMenu = () => {
  const [qr, setQr] = useState(false);
  const [data, setData] = useState({
    text: "",
    size: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setQr(!qr);
  };  
  console.log(data, qr, "data");

  //download
//   const download = e => {
//     console.log(e.target.href);
//     fetch(e.target.href, {
//       method: "GET",
//       headers: {}
//     })
//       .then(response => {
//         response.arrayBuffer().then(function(buffer) {
//           const url = window.URL.createObjectURL(new Blob([buffer]));
//           const link = document.createElement("a");
//           link.href = url;
//           link.setAttribute("download", "image.png"); //or any other extension
//           document.body.appendChild(link);
//           link.click();
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };


  return (
    <div className="text-center">
      <div className="h-screen p-10 pt-25">
        <div className="flex items-center place-content-center m-0 mb-4">
          <label>
            Text
            <hr />
            <input
              className="textInput mr-4 p-2"
              type="text"
              label="Text"
              name="text"
              placeholder="Enter the Text" 
              onChange={handleChange}
            />
          </label>
          <label>
            Size
            <hr />
            <input className="textInput p-2" type="text" name="size" placeholder="100*100" onChange={handleChange} />
          </label>
        </div>
        <button style={{ border: "1px solid" }} className="mb-7" onClick={handleSubmit}>
          Generate
        </button>
        <div>
          {qr ? (
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${data.text}&amp;size=${data.size}`}
              alt="qrCode"
            />
          ) : (
            <h3 className="place-content-center " style={{margin:"auto"}}>Qr Code</h3>
          )}
        </div>
        <div>
        {/* <a
        href={`https://api.qrserver.com/v1/create-qr-code/?data=${data.text}&amp;size=${data.size}`}
        download
        onClick={e => download(e)}
      >
        <i className="fa fa-download" />
        download
      </a> */}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
