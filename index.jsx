/** @jsx React.DOM */
/*jslint node: true */
'use strict';
var React = require('react');
var Hello = require('./Hello');
React.render(
   <Hello />, document.getElementById('content')
);
