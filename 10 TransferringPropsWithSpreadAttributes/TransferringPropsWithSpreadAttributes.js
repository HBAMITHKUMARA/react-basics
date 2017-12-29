var Student  = React.createClass({
    render: function () {
        return (
            <div className="student">
                <div>
                    Name: {this.props.name}
                </div>
                <Info {...this.props} />
                Now we're overriding grade property.
                <Info {...this.props} grade="8.87"/>
            </div>
        );
    }
});

var Info = React.createClass({
    render: function () {
        return (
            <div className="info">
                <div>
                    Grade: {this.props.grade}
                </div>
                <div>
                    Subjects: {this.props.subjects}
                </div>
                <div>
                    Clubs: {this.props.clubs}
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Student name="ami"
        grade="8.8"
        clubs="VolleyBall, Tennis"
        subjects="Maths, Computer science"
    />, document.getElementById('react-app'));