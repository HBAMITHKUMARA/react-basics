function Todo(props) {
    return <div className="green">Todo: {props.item}</div>
}

function List(props) {
    var list = ['react', 'nodejs', 'AWS/GCP', 'portpolio'];
    return (
        <ul>
            {list.map((todo) => <Todo key={todo} item={todo}/>)}
        </ul>
    );
}

ReactDOM.render(<List />, document.getElementById('react-app'));