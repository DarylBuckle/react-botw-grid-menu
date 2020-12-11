# react-botw-grid-menu

> A react component for rendering a Breath of the Wild style inventory menu.

[![NPM](https://img.shields.io/npm/v/react-botw-grid-menu.svg)](https://www.npmjs.com/package/react-botw-grid-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


<img lt="react-botw-grid-menu" src="https://user-images.githubusercontent.com/15156674/101953779-e5e44980-3bf2-11eb-9c3b-b24211b735cf.png">


## Contents

* [Install](#install)
* [Usage](#usage)
* [Props](#props)
* [License](#license)

<br/>


## Install

```bash
npm install --save react-botw-grid-menu
```

Peer Dependencies;
* React v16 +

## Usage

```tsx
import React, { Component } from 'react'

import { BotwGridMenu } from 'react-botw-grid-menu'

class Example extends Component {
  render() {
    return (
      <BotwGridMenu 
        items={[
          {
            id: "apple",
            name: "Apple",
            quantity: 159,
            icon: <i className="fa fa-apple" />,
            note: "A scrumptious apple.\r\nEat it to restore some hearts.",
          },
          {
            id: "bug",
            name: "Bug",
            quantity: 2,
            icon: <i className="fa fa-bug" />,
            note: "Yum"
          }
        ]}
      />
    )
  }
}
```

Example usage at [https://darylbuckle.github.io/react-botw-menu-components](https://darylbuckle.github.io/react-botw-menu-components).


## Props

#### BotwGridMenu

| Property | Type | Default | Mandatory | Description |
| -------- |------| --------| ----------| ------------|
|    items | botwItem[]  |  | true | The data to display in the grid. View the props for botwItem below. |
|    pageSize | number  | 20 | false | The maximum number of items per page. |
|    page | number  |  | false | The current page number. Specify if you wish to control pagination, otherwise it'll be handled automatically. |
|    loading | boolean  | false | false | If true a loading indicator will be displayed. Use when loading ASynchronously. |
|    fillPageWithEmpties | boolean  | true | false | When this is true the page will be filled with empties. |
|    columnCount | number?  | undefined | false | When specified, this number of columns will show. Otherwise the columns will fit the container. |
|    onPageChanged | (page) => void  |  | false | A callback for when navigating to a different page. |
|    onItemActive | (item) => void  |  | false | A callback for when hovering over an item. |
|    onItemInactive | (item) => void  |  | false | A callback for when exiting hover. |
|    onItemSelected | (item) => void  |  | false | A callback for clicking on an item. |


#### botwItem class

| Property | Type | Default | Mandatory | Description |
| -------- |------| --------| ----------| ------------|
|    id | string  |  | true | Unique identifier for the item. |
|    name | string  |  | true | The name of the item. |
|    quantity | number  |  | false | Quantity of the item. |
|    imgSrc | string  |  | false | Src of the image. |
|    icon | any  |  | false | Alternative to ImgSrc. Allows JSX to be used for the image (e.g <i>) |
|    empty | boolean  | false | false | Whether to show an empty item. |


<br/>


## License

MIT © [DarylBuckle](https://github.com/DarylBuckle) 2020