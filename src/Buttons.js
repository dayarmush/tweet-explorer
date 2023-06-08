function Buttons({text="Next", callBack, styling }) {

    return <button className={styling} onClick={callBack}>{text}</button>
}

export default Buttons;