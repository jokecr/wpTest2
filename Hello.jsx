/** @jsx React.DOM */
/*jslint node: true */
'use strict';
var React = require('react');
require('Hello.css');

module.exports = React.createClass({
    displayName: 'HelloReact',
    render: function(){
        return (
        <div className="hello">
          The Hello Component
        </div>
    );
    }
}); 