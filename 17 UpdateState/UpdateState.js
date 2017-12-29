var Box = React.createClass({
    getInitialState: function () {
        return {
            textColor: 'white',
            backgroundColor: 'darkslategrey',
            text: 'Welcome to react!!'
        }
    },

    handleTextColorClick: function() {
        var colors = [
            'yellow',
            'lightgreen',
            'orange',
            'fuchsia',
            'aquamarine'
        ];
        var colorIndex = Math.floor(Math.random() * colors.length);

        this.setState({
            textColor: colors[colorIndex]
        });
    },

    handleBgColorClick: function() {
        var colors = [
            'darkslategrey',
            'darkgreen',
            'darkblue',
            'black',
            'darkred'
        ];
        var colorIndex = Math.floor(Math.random() * colors.length);

        this.setState({
            backgroundColor: colors[colorIndex]
        });
    },

    render: function () {
        const divStyle = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor
        };

        return (
            <div>
                <div className="box" style={divStyle}>
                    {this.state.text}
                </div>
                <button className="button" onClick={this.handleTextColorClick}>
                    Change text color
                </button>
                <button className="button" onClick={this.handleBgColorClick}>
                    Change background color
                </button>
            </div>
        );
    }
});

ReactDOM.render(<Box />, document.getElementById('react-app'));