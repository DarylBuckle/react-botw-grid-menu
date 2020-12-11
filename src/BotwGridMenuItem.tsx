/* eslint-disable prettier/prettier */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import botwItem from './Classes/BotwItem'
import BotwMenuItem from './BotwMenuItem'

import 'botw-menu.css'


interface IBotwGridMenuItemProps {
  item: botwItem,
  active?: boolean,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  onClick?: (
    item: botwItem
  ) => void
}

interface IBotwGridMenuItemState {
}

const initialState: IBotwGridMenuItemState = {
}

class BotwGridMenuItem extends React.Component<
  IBotwGridMenuItemProps,
  IBotwGridMenuItemState
> {
  constructor(props: IBotwGridMenuItemProps) {
    super(props)
    this.state = initialState
  }

  render() {
    const { item, active, onMouseEnter, onMouseLeave, onClick} = this.props;
    let itemClass = "grid";
    if (item.empty) {
      itemClass += " empty";
    }

    return (
      <BotwMenuItem 
        active={!!active}
        classes={itemClass}
        title={item.name}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => {
          if (typeof onClick === 'function') {
            onClick(item);
          }
        }}
      >
        {
          item.icon ? item.icon
          : item.imgSrc ? <img src={item.imgSrc} />
          : <div className="botw-menu-item-name">{item.name}</div>
        }
        { item.quantity ? 
          <div className="botw-menu-item-count">
            <span>x</span>
            <span>{item.quantity}</span>
          </div>
        : null}
      </BotwMenuItem>
    )
  }
}

export default BotwGridMenuItem
