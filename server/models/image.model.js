const Image = require('../schemas/image');

async function saveImage(req, res) {
  try {
    const { imageDataURL } = req.body;

    const image = new Image({ imageData: imageDataURL });
    const savedImage = await image.save();

    res.json({ image: savedImage });
  } catch (error) {
    console.error('Error al guardar la imagen:', error);
    res.status(500).json({ message: error.message });
  }
}

async function getImages(req,res){
  try {
    const images = await Image.find()
    res.json(images)
  } catch (error) {
    
  }
}
exports.saveImage = saveImage;
exports.getImages = getImages;