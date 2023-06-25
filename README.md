DESCRIPCION
El proyecto actual comprende una aplicacion tipo galleria la cual almacenara las imagenes en un bucket S3. Comprende de 3 paginas principales:
Upload: Aqui se suben las imagenes al estado y se pueden ordenar previo a que se carguen en el bucket
Forms: Aqui se llenan los datos del cliente y en resumen se puede ver las caracteristicas del pedido
Gallery: Aqui se puede cargar las imagenes ya subidas en el bucket

DESARROLLO
La aplicacion utiliza Tailwind CSS como framework de estilos, utiliza programacion funcional, en el componente CardImage se utiliza una propiedad prop.children para pasar un texto para cumplir con el requerimiento solicitado. Las credenciales de s3 y el nombre del bucket estan configuradas en los componentes S3Uploader y S3Viewer

DESPLIEGUE
La aplicacion esta subida en el presente bucket:
