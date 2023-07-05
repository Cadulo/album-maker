import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: 'ASIATLQQJSZSA3DHNRWO',
    secretAccessKey: 'nZP7lA5oq5hiTUbnXx/uHujdFym3+MFCeNGLDFUq',
    region: 'us-east-1',
    sessionToken: 'FwoGZXIvYXdzEIv//////////wEaDEp80IEQK65TslU75yK+AbXIAI2h7Mu20GZ6BcvRcgbCAUuuMH08YqInxx7Rql9mzrxjkHMFk9XW6bQuu+hx28beOZpgh0VYeqVX+4UNTg4GqVhQtynKYqVHsJc/ISEPNM2F5LtCJgOrNr2ix02LDm7h9999w0B7pQoE6WQ2Bz7gX4zy+PVsA2dice2K6LduQ6lzQoz1ehK4cjQDj4+DdK8oR38NDwaiVFpfxZyFXJIjFOPwSWL+lpXMeBrQbSw4lA47ss7AuYZug7X0pksot9CIpQYyLVVvPtD+Nl2fFBRP4F4bBf1DprAD4r1AfrWorylLEyZW596mTXdzwzP/ckp+6Q=='
  });

export const S3Uploader = (images) => {
    const s3 = new AWS.S3();
  
    const uploadToS3 = async () => {
        await Promise.all(
            images.map(async (imageDataURL) => {
                const file = await fetch(imageDataURL)
                    .then((res) => res.blob())
                    .then((blob) => new File([blob], `image_${Date.now()}.jpg`, { type: blob.type }));

                const params = {
                    Bucket: 'album-maker-carlos',
                    Key: file.name,
                    Body: file,
                };

                const { Location } = await s3.upload(params).promise();
                // setImageUrl(Location);
                console.log('Cargando a S3:', Location);
            })
        );
    };
    return uploadToS3()

}

