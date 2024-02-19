import style from "../Home.module.scss"
export default function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div>
        <div onClick={onClick} className={`${style.arrow} ${style.prev}`}>
          <span>&#x2190;</span> {/* Unicode left arrow character */}
        </div>
      </div>
    );
  }