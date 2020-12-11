/* eslint-disable prettier/prettier */
import React from 'react'
// eslint-disable-next-line no-unused-vars
import botwItem from './Classes/BotwItem'
import BotwGridMenuItem from './BotwGridMenuItem'

import 'botw-menu.css'

const defaultPageSize = 20;

interface IBotwGridMenuProps {
  items: botwItem[],
  pageSize?: number,
  page?: number,
  loading?: boolean,
  fillPageWithEmpties?: boolean,
  columnCount?: number | undefined,
  onPageChanged?: (
    page: number
  ) => void,
  onItemActive?: (
    item: botwItem
  ) => void,
  onItemInactive?: (
    item: botwItem
  ) => void,
  onItemSelected?: (
    item: botwItem
  ) => void
}

interface IBotwGridMenuState {
  activeItem: botwItem | null,
  selectedItem: botwItem | null,
  page: number
}

const initialState: IBotwGridMenuState = {
  activeItem: null,
  selectedItem: null,
  page: 0
}

class BotwGridMenu extends React.Component<
  IBotwGridMenuProps,
  IBotwGridMenuState
> {
  constructor(props: IBotwGridMenuProps) {
    super(props)
    if (props.page) {
      initialState.page = props.page
    }
    this.state = initialState
  }

  componentDidUpdate(prevProps: IBotwGridMenuProps) {
    if (this.props.page !== prevProps.page) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ page: this.props.page == null ? 0 : this.props.page });
    }
  }

  changePage(newPage: number) {
    if (this.props.page) {
      if (this.props.onPageChanged) {
        this.props.onPageChanged(newPage);
      }
    }
    else {
      this.setState({ page: newPage });
    }
  }

  render() {
    const { items, fillPageWithEmpties, loading } = this.props;
    const { page } = this.state;

    const pageSize = this.props.pageSize ? this.props.pageSize : defaultPageSize;
    const pageCount = Math.ceil(items.length / pageSize);
    const pagedItems: botwItem[] = [];
    const max = Math.min((page + 1) * pageSize - 1, items.length - 1) + 1;
    for (let i = page * pageSize; i < max; i++) {
      pagedItems.push(items[i]);
    }
    if (pagedItems.length < pageSize) {
      if (fillPageWithEmpties === undefined || fillPageWithEmpties) {
        // fillPageWithEmpties is on by default
        while(pagedItems.length < pageSize) {
          // eslint-disable-next-line new-cap
          const emptyItem = new botwItem();
          emptyItem.id = "empty-" + (pagedItems.length - 1);
          emptyItem.empty = true;
          pagedItems.push(emptyItem);
        }
      }
    }

    if (loading) {
      return (
        <div className="botw-loading">
          Loading...
        </div>
      )
    }

    return (
      <div className="botw-grid-menu">
        <div className="botw-page-toggle">
          {page > 0 ?
            <button onClick={() => this.changePage(page - 1)}>
              <i className="arrow left" />
            </button>
          : null}
        </div>
        <div className="botw-page">
          {pagedItems ? 
            this.renderItems(pagedItems)
          : null }
        </div>
        <div className="botw-page-toggle">
          {page + 1 < pageCount ?
            <button onClick={() => this.changePage(page + 1)}>
              <i className="arrow right" />
            </button>
          : null}
        </div>
      </div>
    )
  }

  renderItems(items: botwItem[]) {
    const rows = [];
    const { columnCount, onItemActive, onItemInactive, onItemSelected } = this.props;
    const { activeItem } = this.state;
    
    let row = [];
    for(const item of items) {
      row.push(
        <BotwGridMenuItem
          key={"botw-menu-item-" + item.id} 
          item={item}
          active={!!(activeItem && activeItem.id === item.id)}
          onMouseEnter={item.empty ? undefined : () => {
              this.setState({ activeItem: item });
              if (typeof onItemActive === 'function') {
                onItemActive(item)
              }
            }}
          onMouseLeave={item.empty ? undefined : () => {
            this.setState({ activeItem: null });
            if (typeof onItemInactive === 'function') {
              onItemInactive(item)
            }
          }}
          onClick={onItemSelected}
        />
      )
      if (columnCount && row.length === columnCount) {
        rows.push(<div key={"botw-menu-row-" + rows.length}>{row}</div>);
        row = [];
      }
    }

    if (row.length > 0) {
      rows.push(<div key={"botw-menu-row-" + rows.length}>{row}</div>);
    }

    return rows;
  }
}

export default BotwGridMenu
