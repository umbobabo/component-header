'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var _ = require('./');

var _2 = _interopRequireDefault(_);

exports['default'] = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(
    _2['default'],
    {
      className: 'header--blog21003976',
      image: {
        src: 'http://cdn.static-economist.com/sites/default/files/external/test-assets/democracy-in-america.svg'
      },
      flyTitle: 'Some type here',
      title: 'Blog name goes here',
      text: 'There are many reasons why sceptics might find fault with the 17 for a new world order, were enough for the good Lord.',
      itemType: 'http://schema.org/Blog',
      itemProp: 'blog',
      link: {
        href: 'http://www.google.com',
        title: 'Clicke here and go somewhere'
      }
    },
    _react2['default'].createElement(
      'div',
      { className: 'header__follow-us-title' },
      'Follow on'
    ),
    _react2['default'].createElement(
      'div',
      { className: 'header__follow-us-icons' },
      _react2['default'].createElement(
        'a',
        { href: 'https://twitter.com/TheEconomist' },
        _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'twitter', size: '40px' })
      )
    )
  )
);
module.exports = exports['default'];