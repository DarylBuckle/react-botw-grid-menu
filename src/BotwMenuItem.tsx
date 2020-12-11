/* eslint-disable prettier/prettier */
import React from 'react'

import 'botw-menu.css'


interface IBotwMenuItemProps {
  active?: boolean,
  containerClasses?: string,
  classes?: string,
  containerStyle?: React.CSSProperties | undefined,
  style?: React.CSSProperties | undefined,
  title?: string,
  content?: any,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  onClick?: () => void,
}

interface IBotwMenuItemState {
  uncontrolledActive: boolean
}

const initialState: IBotwMenuItemState = {
  uncontrolledActive: false
}

class BotwMenuItem extends React.Component<
  IBotwMenuItemProps,
  IBotwMenuItemState
> {
  constructor(props: IBotwMenuItemProps) {
    super(props)
    this.state = initialState
  }

  mouseEnter() {
    const { active, onMouseEnter } = this.props;
    if (active == null) {
      // Uncontrolled
      this.setState({ uncontrolledActive: true });
    }
    else {
      // controlled
      if (onMouseEnter) {
        onMouseEnter();
      }
    }
  }

  mouseLeave() {
    const { active, onMouseLeave } = this.props;
    if (active == null) {
      // Uncontrolled
      this.setState({ uncontrolledActive: false });
    }
    else {
      // controlled
      if (onMouseLeave) {
        onMouseLeave();
      }
    }
  }

  render() {
    const { classes, containerClasses, active, title, children, containerStyle, style, onClick } = this.props;
    let itemClass = "botw-menu-item";
    if (classes) {
      itemClass += ` ${classes}`;
    }

    const isActive = (active == null ? this.state.uncontrolledActive : active);
    if (isActive) {
      itemClass += " active";
    }

    let containerClass = "botw-menu-item-container";
    if (containerClasses) {
      containerClass += ` ${containerClasses}`;
    }

    const menuContent = (
      <div 
        className={itemClass} 
        title={title}
        onMouseEnter={() => this.mouseEnter()}
        onMouseLeave={() => this.mouseLeave()}
        style={style}
      >
        <div className="botw-menu-item-content">
          {children}
        </div>
      </div>
    )

    if (isActive) {
      return (
        <div className={containerClass} style={containerStyle} onClick={() => {
          if (typeof onClick === 'function') {
            onClick();
          }
          }}>
          <div className="active-corner" />
          <div className="active-corner" />
          <div className="active-corner" />
          <div className="active-corner" />
          {menuContent}
        </div>
      )
    }
    else {
      return (
        <div className={containerClass} style={containerStyle} onClick={() => {
          if (typeof onClick === 'function') {
            onClick();
          }
          }}>
          {menuContent}
        </div>
      )
    }
    
  }
}

export default BotwMenuItem
