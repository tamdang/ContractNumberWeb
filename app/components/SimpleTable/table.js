import React from 'react'
import './style.css'

export default class Table extends React.Component{
  render(){
    const {data, columns} = this.props
    return (
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>
              #
            </th>
            {
              columns.map(c=>(
                <th scope='col' key={c.name}>
                  {c.name}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>          
          {
            data.map((item,index)=>(
                <tr key={index} onClick={()=>this.props.onRowClick(item)}>
                  <th scope='row'>
                    {index+1}
                  </th>
                  {
                    columns.map((c,index)=>(
                          <td key={index}>
                            {item[c.field]}
                          </td>
                    ))
                  }
                </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
