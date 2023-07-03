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
    res.status(500).json({ message: error.message });
  }
}

async function deleteImage(req,res){
  try {
    const {id} = req.params;
    await Image.findByIdAndDelete(id);
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error)
  }
}

exports.deleteImage = deleteImage;
exports.saveImage = saveImage;
exports.getImages = getImages;