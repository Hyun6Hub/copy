import React from "react";

export default function Menu({ href, name }) {
  /* menu컴포넌트정의 href, name 두개의 props받음 */
  /* props를 사용하여 a태그 반환함 */
  return (
    <a className="header__menu__item" href={href}>
      {name}
    </a>
    /* a에 css클래스 적용 */
    /* href의 props값을 링크 href속성으로 설정함 */
  );
}
