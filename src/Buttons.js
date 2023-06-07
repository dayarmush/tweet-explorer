function Buttons({text="next", callBack, style }) {

    return <button className={style} onClick={callBack}>{text}</button>
}

export default Buttons;