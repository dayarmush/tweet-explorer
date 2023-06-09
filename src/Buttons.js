function Buttons({text="Next", callBack, styling='none' }) {

    return <button className={styling} onClick={callBack}>{text}</button>
}

export default Buttons;