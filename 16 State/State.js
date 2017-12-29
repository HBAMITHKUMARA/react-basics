var Box = React.createClass({
    getInitialState: function () {
        return {
            textColor: 'white',
            backgroundColor: 'darkslategrey'
        }
    },

    render: function () {
        const divStyle = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor
        };

        return (
            <div>
                <div className="box" style={divStyle}>
                    Welcome to react!!
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Box />, document.getElementById('react-app'));