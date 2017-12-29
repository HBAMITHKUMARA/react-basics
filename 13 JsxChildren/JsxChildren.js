function RedText(props) {
    return <div className="red">{props.children}</div>
}

function GreenText(props) {
    return <div className="green">{props.children}</div>
}

ReactDOM.render(
    <RedText>
        Some nested elements here...
        <span><i>lol</i></span> &amp; <span><b>lol</b></span>
    </RedText>, document.getElementById('react-app'));
    
ReactDOM.render(
    <GreenText>
        Some nested elements here...GreenText Area
        <RedText>
        Some nested elements here...RedText Area  
            <span><i>lol</i></span> &amp; <span><b>lol</b></span>
        </RedText>
    </GreenText>, document.getElementById('react-app-1'));