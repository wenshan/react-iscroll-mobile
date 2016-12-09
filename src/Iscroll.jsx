import React from 'react';
import ReactDom from 'react-dom';
import IScroll from './iscroll-lib.js';
import cx from 'classnames';
const  nofn = function (){};

const Iscroll = React.createClass({
  propTypes: {
    mouseWheel: React.PropTypes.bool,
    probeType: React.PropTypes.number,
    className: React.PropTypes.string,
    scroll: React.PropTypes.func,
    slideDown: React.PropTypes.func,
    slideUp: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      mouseWheel: false,
      probeType: 3,
      className: "scrollable",
      scroll: nofn,
      slideDown: nofn,
      slideUp: nofn
    };
  },

  componentDidMount() {
    let el = ReactDom.findDOMNode(this)
    let props = this.props;
    let opts = {
      mouseWheel: props.mouseWheel,
      probeType: props.probeType
    }

    this.iscroll = new IScroll(el, opts);

    this.iscroll.on("scroll", this.props.scroll.bind(this, this.iscroll));

    this.iscroll.on("slideDown", this.props.slideDown.bind(this, this.iscroll));

    this.iscroll.on("slideUp", this.props.slideUp.bind(this, this.iscroll));
  },

  componentWillReceiveProps() {
    if (this.iscroll) this.iscroll.refresh()
  },

  componentWillUnmount() {
    if (this.iscroll) this.iscroll.destroy()
  },

  render() {
    return (
      <div className={cx('scrollable'), this.props.className}>
        <div className="scroller">
          <div className="scroller-pullDown">
            <span className="icon-double-angle-down pull-down-icon"></span>
            <span className="pull-down-msg">下拉刷新</span>
          </div>
          <div className="scroller-content">
            {this.props.children}
          </div>
          <div className="scroller-pullUp">
            <span className="icon-double-angle-up pull-up-icon"></span>
            <span className="pull-up-msg">上拉刷新</span>
          </div>
        </div>
      </div>
    )
  }
});

export default Iscroll
