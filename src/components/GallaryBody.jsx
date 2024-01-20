import './GallaryBody.css'
export default function GallaryBody(props) {
  const imageData = props.imageData;
  console.log('imageData:', imageData);

  return (
    <div>
      {imageData.map((image) => {
        // console.log('image:', image);
        return (
          <div key={image.id} className="column">
            <img src={image.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}
