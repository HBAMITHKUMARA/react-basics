var Container = React.createClass({
    someText:'sample text in container',
    render: function () {
        return (
            <div className="container">
                <p>test</p>
                <Contents text="contents hard coded" />
                <Contents text={"contents hard coded, props with expression"} />
                <Contents text={this.someText} />
                <Contents text={1 + 2 + 3 + 4} />
            </div>
        );
    }
});

var Contents = React.createClass({
    render: function () {
        return (
            <div className="contents">
                {this.props.text}
            </div>
        );
    }
});

ReactDOM.render(<Container />, document.getElementById('react-app'));