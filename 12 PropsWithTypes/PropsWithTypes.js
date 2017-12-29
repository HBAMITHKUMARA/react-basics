var Contents = React.createClass({
    propTypes: {
        text: React.PropTypes.string,
        number: React.PropTypes.number,
        enabled: React.PropTypes.bool,
        info: React.PropTypes.string.isRequired,
        petName: function (properties, propertyName, componentName) {
            var propertyValue = properties[propertyName];
            if (propertyValue !== 'shan' && propertyValue === '') {
                throw Error('value should be shan');
            }
        }
    },
    
    getDefaultProps: function () {
        return {
            text: 'contents of a container',
            number: 114,
            enabled: true,
            info: 'info ha ha',
            petName: 'shan'
        }
    },

    render: function () {
        return (
            <div className="contents">
                <div>
                    Text: {this.props.text}
                </div>
                <div>
                    Number: {this.props.number}
                </div>
                <div>
                    Enabled: {this.props.enabled ? 'true' : 'false'}
                </div>
                <div>
                    Info: {this.props.info}
                </div>
                <div>
                    PetName: {this.props.petName}
                </div>
            </div>
        );
    }

});

ReactDOM.render(<Contents />, document.getElementById('react-app'));