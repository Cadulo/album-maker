const { Athena } = require("aws-sdk");
const Image = require("../schemas/image.schema");

async function saveImage(req, res) {
  try {
    const { imageDataURL } = req.body;

    const image = new Image({ imageData: imageDataURL, user: req.user.id });
    const savedImage = await image.save();

    res.json({ image: savedImage });
  } catch (error) {
    console.error("Error al guardar la imagen:", error);
    res.status(500).json({ message: error.message });
  }
}

async function getImages(req, res) {
  try {
    const images = await Image.find({ user: req.user.id }).populate("user");
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteImage(req, res) {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
}

exports.deleteImage = deleteImage;
exports.saveImage = saveImage;
exports.getImages = getImages;
