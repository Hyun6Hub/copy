import "./App.css";
import "./css/Commons.css";
import Menu from "./components/Menu.jsx";
import MenuList from "./components/MenuList.jsx";

/* app이라는 함수형 컴포넌트 정의 */
/* list 배열로 정의 */
/* 이미지와 이름 포함한 4개의 객체 */

export default function App() {
  const list = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#skills", name: "Skills" },
    { href: "#mywork", name: "My work" },
    { href: "#testimonial", name: "Testimonial" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <>
      <Menu href="#home" name="Home" bg="tomato" />
      <Menu href="#about" name="About" bg="gray" />
      <Menu href="#skills" name="Skills" bg="tomato" />
      <hr />
      <MenuList list={list} />
    </>
  );
}
