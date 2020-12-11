import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { BotwGridMenu } from 'react-botw-grid-menu'

const items = [
  {
    id: "apple",
    name: "Apple",
    quantity: 159,
    icon: <i className="fa fa-apple" />,
    note: "A scrumptious apple.\r\nEat it to restore some hearts."
  },
  {
    id: "bug",
    name: "Bug",
    quantity: 2,
    icon: <i className="fa fa-bug" />,
    note: "Yum"
  },
  {
    id: "bomb",
    name: "Bomb",
    quantity: 19,
    icon: <i className="fa fa-bomb" />
  },
  {
    id: "beer",
    name: "Beer",
    quantity: 1,
    icon: <i className="fa fa-beer" />
  },
  {
    id: "car",
    name: "Car",
    quantity: 5,
    icon: <i className="fa fa-car" />
  },
  {
    id: "fire",
    name: "Fire",
    quantity: 95,
    icon: <i className="fa fa-fire" />
  },
];

const App = () => {
  function onSelect(item: any) {
    window.alert("You selected " + item.name);
  }

  return (
    <div>
      <nav className='navbar botw-menu-item br-none bl-none bt-none fixed-top' style={{ position: "fixed", opacity: 1 }}>
          <div className="botw-menu-item-content" style={{ width: "100%" }}>
            <div className="text-center botw-text mt-3">
              <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='http://github.com/darylbuckle/react-botw-grid-menu'>Source</a></h5>
              <h2 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='.'>Examples</a></h2>
              <h5 className="mx-3" style={{ display: "inline-block" }}><a className={'nav-link active'} href='http://github.com/darylbuckle/react-botw-menu-components'>Botw Components</a></h5>
            </div>
          </div>
      </nav>
      

      <div className='container-xl' style={{marginTop:'150px'}}>
        <h1 className='mb-3'>React Botw Grid Menu examples</h1>

        <p className="mb-5">
          * Images from FontAwesome free. You can replace these with your own images.
        </p>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Standard grid</h2>
          <p>
            A standard grid. Column count unspecified.
          </p>
          <div className='row'>
            <div className="col-md-12">
              <BotwGridMenu
                items={items}
                fillPageWithEmpties={false}
                onItemSelected={onSelect}
              >

              </BotwGridMenu>
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Fixed column count</h2>
          <p>
            Fixed column count. Empties fill the page.
          </p>
          <div className='row'>
            <div className="col-md-12">
              <BotwGridMenu
                items={items}
                fillPageWithEmpties={true}
                columnCount={5}
                onItemSelected={onSelect}
              >

              </BotwGridMenu>
            </div>
          </div>
        </div>

        <div className='mt-3 mb-5'>
          <h2 className='mb-4'>Custom page size</h2>
          <p>
            Smaller page size. Example with pagination.
          </p>
          <div className='row'>
            <div className="col-md-12 mb-5">
              <BotwGridMenu
                items={items.concat(items)}
                fillPageWithEmpties={true}
                columnCount={5}
                pageSize={10}
                onItemSelected={onSelect}
              >

              </BotwGridMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
