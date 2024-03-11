import style from "../Home.module.scss";

export default function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <div className={`${style.arrow} ${style.next}`} onClick={onClick}>
        <span>&#x2192;</span> {/* Unicode right arrow character */}
      </div>
    </div>
  );
}
