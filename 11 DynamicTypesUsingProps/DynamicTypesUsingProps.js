function BlueBox(props) {
    return <Box color="blue" />
}

function GreenBox(props) {
    return <Box color="green" />
}

function RedBox(props) {
    return <Box color="red" />
}

function RandomBox(props) {
    const Boxes = [BlueBox, RedBox, GreenBox];
    const SomeBox = Boxes[props.index];
    return <SomeBox />
}

function Box(props) {
    const divStyle = {
        backgroundColor: props.color
    }
    return (
        <div className="box" style={divStyle}></div>
    );
}


ReactDOM.render(<Box color="yellow" />, document.getElementById('container0'));
ReactDOM.render(<BlueBox />, document.getElementById('container1'));
ReactDOM.render(<RedBox />, document.getElementById('container2'));
ReactDOM.render(<GreenBox />, document.getElementById('container3'));
ReactDOM.render(<RandomBox index={Math.floor(Math.random() * 3)}/>, document.getElementById('container4'));

