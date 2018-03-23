import React from 'react'

export default class Table extends React.Component{
  render(){
    const {data, columns} = this.props
    return (
      <div className="px-2">
        <div className="row text-light bg-dark">
          {
            columns.map(c=>(
              <div className="col-sm border" key={c.name}>
                {c.name}
              </div>
            ))
          }
        </div>
        {
          data.map((item,index)=>(
              <div className="row" key={index}>
                {
                  columns.map((c,index)=>(
                      <div className="col-sm border" key={index}>
                        {item[c.field]}
                      </div>
                  ))
                }
              </div>
          ))
        }
      </div>      
    )
  }
}
