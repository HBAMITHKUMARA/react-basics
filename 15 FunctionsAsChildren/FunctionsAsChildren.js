function Numbers(props) {
    var numbersList = [];

    for (var i = 1; i < props.upto; i++) {
        numbersList.push(props.children(i));
    }
    console.log('numbersList:   ', numbersList);
    return <div>{numbersList}</div> 
}

function List(props) {
    return (
        <Numbers upto={props.upto}>
            {(index) => <div key={index}>{index}</div>}
        </Numbers>
    );
}

ReactDOM.render(<List upto={10} />, document.getElementById('react-app'));