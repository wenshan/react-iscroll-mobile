# react-iscroll-mobile
---

mobile iscroll react modules

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[travis-image]: https://travis-ci.org/nvsky/mobile-login-react-module.svg?style=flat-square
[travis-url]: https://travis-ci.org/nvsky/mobile-login-react-module
[npm-image]: https://img.shields.io/npm/v/mobile-login-module.svg?style=flat-square
[npm-url]: http://npmjs.org/package/mobile-login-module
[coveralls-image]: https://coveralls.io/repos/github/nvsky/mobile-login-react-module/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/nvsky/mobile-login-react-module?branch=master
[download-image]: https://img.shields.io/npm/dm/mobile-login-module.svg?style=flat-square
[download-url]: https://npmjs.org/package/mobile-login-module

## install

[![react-iscroll-mobile](https://nodei.co/npm/mobile-login-module.png)](https://npmjs.org/package/react-iscroll-mobile)

## Usage

```js
require('../assets/index.less');
const React = require('react');
const ReactDOM = require('react-dom');
const Iscroll = require('react-iscroll-mobile');


const Test = React.createClass({

  _scroll(obj){
    var y = obj.y,
      maxY = obj.maxScrollY - y;

    if(y >= 40){
      return "";
    }else if(y < 40 && y > 0){
      return "";
    }

    if(maxY >= 40){
      return "";
    }else if(maxY < 40 && maxY >=0){
      return "";
    }
  },

  _slideDown(obj){
    if(obj.y > 40){
      alert("slideDown");
    }
  },

  _slideUp(obj){
    if(obj.maxScrollY - obj.y > 40){
      alert("slideUp");
    }
  },
  render() {
    return (
      <Iscroll mouseWheel={false}
              probeType={3}
              wrapperClass="wrapper"
              scroll={this._scroll}
              slideDown={this._slideDown}
              slideUp={this._slideUp}
        >
        <ul>
          <li>Pretty row 1</li>
          <li>Pretty row 2</li>
          <li>Pretty row 3</li>
          <li>Pretty row 4</li>
          <li>Pretty row 5</li>
          <li>Pretty row 6</li>
          <li>Pretty row 7</li>
          <li>Pretty row 8</li>
          <li>Pretty row 9</li>
          <li>Pretty row 10</li>
          <li>Pretty row 11</li>
          <li>Pretty row 12</li>
          <li>Pretty row 13</li>
          <li>Pretty row 14</li>
          <li>Pretty row 15</li>
          <li>Pretty row 16</li>
          <li>Pretty row 17</li>
          <li>Pretty row 18</li>
          <li>Pretty row 19</li>
          <li>Pretty row 20</li>
        </ul>
      </Iscroll>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
```

## API

### props


## Development

```
npm install react-iscroll-mobile --save
npm start
```

## Example

https://github.com/wenshan/react-iscroll-mobile
