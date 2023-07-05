import React, { useState, useContext, useEffect } from "react";
import CardImageS3 from "./CardImageS3";
import { Link } from "react-router-dom";
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: "ASIATLQQJSZSBOSIGYMR",
  secretAccessKey: "wfGEo35KBmcd7rTCOsyCNNkmwq7F/UJ1gESiHf/t",
  region: "us-east-1",
  sessionToken:
    "FwoGZXIvYXdzEB4aDFxHqYqkybj1vXWDqCK+AZxq2Vx+8ihhft+gOtexBkTujU7rqxnUVzoj8FV48pJRpyxl9cM8eGrfSPNFH5t+RviRf88E4JX+qAnHZhgY92o64wTJGLACirYuEM4+t2M8l8rk+ji1IQ+D9VR6zbw6vygmQmH+bNv/XrJkYuX6NXCMsMjOZyQhymOZ8UYIFD1PpDsZ+cYRFFVzhUIsQm6kcsguzPgbNhKhuiVAzoyDrSkIe1/3YsysGofO8mo8S2z291XoECP6jxpSpQ1Wr8kogKS4pAYyLZk9WjHz5zyWUdpcafVPAI10wVReYp38rD/26Ys7Z2g74kxi8212wppi8KpJzg==",
});

export const S3Viewer = ({ showImages, showMessage }) => {
  const [listFiles, setListFiles] = useState([]);
  const [s3Domain, setS3Domain] = useState("");

  const s3 = new AWS.S3();

  const getFromS3 = (e) => {
    const params = {
      Bucket: "album-maker-carlos",
    };
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data);
        setS3Domain(data.Name);
        setListFiles(data.Contents);
      }
    });
  };

  useEffect(() => {
    getFromS3();
  }, []);

  const formatUrl = (name) => {
    const url =
      "https://" + s3Domain + ".s3.amazonaws.com/" + name.replaceAll(" ", "+");
    return url;
  };

  // const deleteFromS3 = (key) => {
  //   const params = {
  //     Bucket: "album-maker-carlos",
  //     Key: key,
  //   };

  //   s3.deleteObject(params, (err, data) => {
  //     if (err) {
  //       console.log(err, err.stack, key);
  //     } else {
  //       console.log("Imagen eliminada con éxito:", key);
  //       // Actualizar la lista de archivos después de eliminar la imagen
  //       setListFiles((prevList) => prevList.filter((file) => file.Key !== key));
  //     }
  //   });
  // };

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {showMessage && (
        <div className="grid  grid-col-1 justify-center">
          <div className="text-center">
            Tienes un total de {listFiles.length} imagenes, el cual tiene un
            costo de {listFiles.length * 2.5}
          </div>
          {listFiles && listFiles.length > 0 && (
            <div className=" ">
              <ul className="text-center">
                {listFiles.map((name, index) => (
                  <li>{name.Key}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {showImages && (
        <div className="flex justify-center mt-4 mx-4">
          {listFiles && listFiles.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
              {listFiles.map((name, index) => (
                <CardImageS3
                  key={index}
                  imageDataURL={formatUrl(name.Key)}
                  // deleteFromS3={deleteFromS3}
                  imageKey={name.Key}
                ></CardImageS3>
              ))}
            </div>
          )}
        </div>
      )}
      ;
    </div>
  );
};
