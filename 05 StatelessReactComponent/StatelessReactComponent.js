var HelloWorld = React.createClass({
    render: function() {
  return React.createElement(
        'h3', { className: 'highlight' }, 'hello world from normal component!');
    }
});

var HelloWorldJSX = React.createClass({
    render: function() {
        return <h3 className='highlight-jsx'> 
                    Hello world from a component using JSX! 
               </h3>
    }
});


var reactComponentElement = React.createElement(HelloWorld);
ReactDOM.render(reactComponentElement, 
  document.getElementById('reactclass-1'));

ReactDOM.render(<HelloWorld />, 
document.getElementById('reactclass-2'));
ReactDOM.render(<HelloWorldJSX />, 
document.getElementById('reactclass-3'));