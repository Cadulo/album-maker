
function CardImageS3({deleteFromS3,imageKey,imageDataURL}) {
    // const handleDelete= async ()=>{
    //     try {
    //         await deleteFromS3(imageKey)
    //     } catch (error) {
    //         console.log("No se pudo eliminar la imagen de S3")
    //     }
    // }

    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={imageDataURL} className="w-50 h-48" alt="" />
        {/* <div className="px-6 pt-4 pb-2">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDelete()}>
                Delete
            </button>
        </div> */}
    </div>
    );
}

export default CardImageS3;