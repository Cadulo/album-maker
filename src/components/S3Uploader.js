import AWS from 'aws-sdk';
import { useState,useContext } from 'react';
import { ImagesContext } from "../pages/Upload";
import Continue from "./Continue"
import { useAuth } from "../context/AuthContext";

AWS.config.update({
    accessKeyId: 'ASIATLQQJSZSBOSIGYMR',
    secretAccessKey: 'wfGEo35KBmcd7rTCOsyCNNkmwq7F/UJ1gESiHf/t',
    region: 'us-east-1',
    sessionToken: 'FwoGZXIvYXdzEB4aDFxHqYqkybj1vXWDqCK+AZxq2Vx+8ihhft+gOtexBkTujU7rqxnUVzoj8FV48pJRpyxl9cM8eGrfSPNFH5t+RviRf88E4JX+qAnHZhgY92o64wTJGLACirYuEM4+t2M8l8rk+ji1IQ+D9VR6zbw6vygmQmH+bNv/XrJkYuX6NXCMsMjOZyQhymOZ8UYIFD1PpDsZ+cYRFFVzhUIsQm6kcsguzPgbNhKhuiVAzoyDrSkIe1/3YsysGofO8mo8S2z291XoECP6jxpSpQ1Wr8kogKS4pAYyLZk9WjHz5zyWUdpcafVPAI10wVReYp38rD/26Ys7Z2g74kxi8212wppi8KpJzg=='
  });

export const S3Uploader = () => {
    const { upLoadToMongo } = useAuth();
    const s3 = new AWS.S3();
    const {images} = useContext(ImagesContext);
    const [imageUrl, setImageUrl] = useState(null);

    const uploadToS3 = async () => {
        await Promise.all(
            images.map(async (imageData) => {
                const file = await fetch(imageData)
                    .then((res) => res.blob())
                    .then((blob) => new File([blob], `image_${Date.now()}.jpg`, { type: blob.type }));

                const params = {
                    Bucket: 'album-maker-carlos',
                    Key: file.name,
                    Body: file,
                };

                const { Location } = await s3.upload(params).promise();
                setImageUrl(Location);
                console.log('Cargando a S3:', Location);
            })
        )
        };

    

    return (
        <div>
            <Continue uploadToS3={uploadToS3} ></Continue>
        </div>
    );

}



