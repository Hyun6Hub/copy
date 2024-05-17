import "../css/Avata.css";

/* Avata일므으로 컴포넌트 정의 두개의 props(image, name)를 받아서 렌더링함 */
export default function Avata({ image, name }) {
  return (
    <div className="avata">
      <img src={image} className="avata-img"></img>
      <p className="avata-name">{name}</p>
    </div>
  );
}
