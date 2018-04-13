/**
 * Flat style.
 * @module flatstyle
 * @private
 */
'use strict';

module.exports = {

  '.unselectable': {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  },
  '.cuttext': {
    'white-space': 'nowrap',
    'overflow-x': 'hidden',
    'text-overflow': 'ellipsis'
  },
  '.fixed': {
    position: 'fixed'
  },
  'body': {
    margin: '0px'
  },
  '.mobile-app': {
    margin: '0',
    'overflow-x': 'visible',
    '-webkit-text-size-adjust': '100%',
    '-ms-text-size-adjust': 'none',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
  },
  '.header': {
    display: 'block'
  },
  '.noborder': {
    'border': '0px !important'
  },
  '.navbar': {
    color: '%colors:headertext%',
    'border-bottom': '%colors:headerborder%',
    top: '0px',
    left: '0px',
    right: '0px',
    'z-index': '3000'
  },
  '.navbar-inner': {
    'background': '%colors:header%',
    height: '50px',
    'padding-left': '0px',
    'padding-right': '0px',
    'box-shadow': '0 2px 5px rgba(0,0,0,.26)'
  },
  '.desktop-app .navbar-brand': {
    float: 'left',
    'font-size': '20px',
    'font-weight': 'normal',
    'line-height': '32px',
    margin: '8px 80px 0 8px'
  },
  '.mobile-app .navbar-brand': {
    width: 'calc(100vw - 100px)',
    display: 'inline-block',
    'text-align': 'center',
    'font-size': '14px',
    'line-height': '50px',
    'overflow-y': 'hidden',
    'font-weight': 'normal',
    'text-shadow': 'none'
  },
  '.navbar-logo': {
    'max-height': '35px'
  },
  '.mobile-app .navbar-logo': {
    'margin-top': '7px'
  },
  '.profile-img': {
    display: 'none',
    margin: '5px',
    width: '80px',
    height: '80px'
  },
  '.desktop-app .profile-img': {
    float: 'right',
    width: '40px',
    height: '40px'
  },
  '.menu-icon': {
    display: 'inline-block',
    cursor: 'pointer',
    float: 'left',
    width: '50px',
    height: '50px',
    'max-height': '50px',
    padding: '5px',
    'box-sizing': 'border-box',
    'text-align': 'center'
  },
  '.desktop-app .menu-icon': {
    padding: '8px'
  },
  '.menu': {
    display: 'none',
    position: 'fixed',
    top: '0px',
    left: '-300px',
    width: '300px',
    height: '100vh',
    background: '#FFF',
    'box-shadow': '0 0 16px rgba(0,0,0,.28)',
    'z-index': '30001'
  },
  '.menu-brand': {
    'width': '100%',
    'align-items': 'center',
    'text-align': 'center',
    'margin-top': '20px'
  },
  '.menu-logo': {
    'max-height': '40px'
  },
  '.circle-img': {
    'background-size': 'cover',
    'background-position': 'center center',
    'border-radius': '50%',
    '-moz-border-radius': '50%',
    '-webkit-border-radius': '50%',
    'border-spacing': '0px'
  },
  '.main': {
    background: 'whitesmoke',
    'margin-top': '50px',
    height: 'calc(100vh - 65px)'
  },
  '.mobile-app .main': {
    'margin-top': '0px',
    height: 'calc(100vh)'
  },
  '.main-windows': {
    width: '100%',
    padding: '5px',
    display: 'inline-block',
    'padding-bottom': '0px',
    'min-height': '36px'
  },
  '.main-windows-btn': {
    display: 'inline-block',
    padding: '4px',
    margin: '3px 3px 0px 0px',
    'background-color': '#FFF',
    cursor: 'pointer',
    border: '1px solid transparent',
    'font-size': '13px'
  },
  '.main-windows-btn.active': {
    border: '1px solid %colors:header%'
  },
  '.window': {
    border: '1px solid #f1f1f1',
    'box-sizing': 'border-box',
    position: 'relative',
    display: 'none',
    background: 'white'
  },
  '.desktop-app .window': {
    'vertical-align': 'top'
  },
  '.window-main': {
    padding: '10px'
  },
  '.title-bar': {
    'background': '%colors:title%',
    color: '%colors:titletext%',
    padding: '10px'
  },
  '.title': {
    'font-size': '21px'
  },
  '.title.mobile': {
    'overflow-y': 'hidden'
  },
  '.title.alt': {
    'font-size': '18px'
  },
  '.title-icon': {
    float: 'right',
    'font-size': '16px',
    cursor: 'pointer',
    'margin-right': '3px'
  },
  '.title-icon:hover': {
    color: '#000'
  },
  '.desktop-app .actions-bar': {
    'padding-bottom': '5px'
  },
  '.desktop-app .action-button': {
    display: 'inline-block',
    'font-size': '12px',
    padding: '5px',
    margin: '2px',
    cursor: 'pointer'
  },
  '.mobile-app .actions-bar': {
    position: 'fixed',
    bottom: '-999px',
    'background-color': '#2c3e50',
    left: '0px',
    width: '100vw',
    'box-sizing': 'border-box',
    height: 'auto',
    color: 'white',
    'z-index': '29001'
  },
  '.mobile-app .action-button': {
    'border-width': '0px',
    padding: '10px',
    'line-height': '21px',
    'font-size': '10px',
    'text-align': 'center',
    width: '25vw',
    'box-sizing': 'border-box',
    height: '60px',
    display: 'inline-block'
  },
  '.action-button:hover': {
    background: '%colors:hover%',
    color: '%colors:hovertext%'
  },
  '.desktop-app .window-width-full': {
    margin: '5px 0px 0px 5px',
    width: '100%',
    'max-width': ['98%',
      '-webkit-calc(100% - 10px)',
      '-moz-calc(100% - 10px)',
      'calc(100% - 10px)']
  },
  '.mobile-app .window-width-full': {
    width: '100%',
    'max-width': '100%'
  },
  '.desktop-app .window-width-half': {
    margin: '5px 0px 0px 5px',
    width: '100%',
    'max-width': ['48%',
      '-webkit-calc(50% - 10px)',
      '-moz-calc(50% - 10px)',
      'calc(50% - 10px)']
  },
  '.mobile-app .window-width-half': {
    width: '100%',
    'max-width': '100%'
  },
  '.window-height-auto': {
    height: 'auto'
  },
  '.window-height-full': {
    'min-height': '300px',
    'height': '100%'
  },
  '.window-height-block': {
    'max-height': '300px',
    height: '300px'
  },
  '.window-height-half': {
    'min-height': '200px',
    'height': '50%'
  },
  '.desktop-app .main-container': {
    width: '100%',
    display: 'inline-block',
    'vertical-align': 'top'
  },
  '.mobile-app .main-container': {
    height: '100vh',
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100vw'
  },
  '.main-container.pad': {
    'margin-top': '50px'
  },
  '.side-container': {
    display: 'none',
    width: '30%',
    'vertical-align': 'top'
  },
  '.control-container': {
    width: '100%'
  },
  '.control-label': {
    display: 'inline-block',
    width: '50%',
    'font-size': '14px'
  },
  '.control-input': {
    display: 'inline-block',
    width: '50%',
    'font-size': '14px',
    padding: '3px',
    border: '1px solid gainsboro'
  },
  /* Sweet Alert Overrides */
  '.sweet-alert button': {
    'background-color': '%colors:alertbutton% !important',
    color: '%colors:alertbuttontext% !important'
  }
};
