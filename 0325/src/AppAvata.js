import logo from "./logo.svg";
import "./App.css";
import "./css/Commons.css";
import Avata from "./components/Avata.jsx";
import AvataList from "./components/AvataList.jsx";

/* app이라는 함수형 컴포넌트 정의 */
/* list 배열로 정의 */
/* 이미지와 이름 포함한 4개의 객체 */
/* app 컴포넌트 정의 및 데이터 준비 */

export default function App() {
  const list = [
    { image: "images/avata.png", name: "Judy" },
    { image: "images/people1.webp", name: "James" },
    { image: "images/people2.webp", name: "Kevin" },
    { image: "images/people3.webp", name: "Anna" },
  ];

  /* 컴포넌트 렌더링 */
  /* AvataList 컴포넌트에 list배열을 props로 전달*/
  /* 각각의 Avata 컴포넌트를 개별적으로 렌더링하며, image와 name속성을 props로 전달 */
  return (
    <>
      <AvataList list={list} />
      <Avata image="images/avata.png" name="Judy" />
      <Avata image="images/people1.webp" name="James" />
      <Avata image="images/people2.webp" name="Kevin" />
      <Avata image="images/people3.webp" name="Anna" />
    </>
  );
}
