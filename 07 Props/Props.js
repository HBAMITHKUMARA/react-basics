var Contents = React.createClass({
    
    getDefaultProps: function () {
        return {
            text: 'contents of this container'
        }
    },

    render: function () {
        return (
            <div className="contents">
                {this.props.text}
            </div>
        );
    }

});

ReactDOM.render(<Contents />, document.getElementById('react-app'));