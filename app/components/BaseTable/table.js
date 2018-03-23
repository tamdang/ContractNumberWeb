import React from 'react'
import './style.css'

export default class Table extends React.Component{
  render(){
    const {data, columns} = this.props
    return (
      <table className="px-2 w-100">
        <tbody>
          <tr className="text-light bg-dark">
            {
              columns.map(c=>(
                <th className="text-left border py-3 pl-2" key={c.name}>
                  {c.name}
                </th>
              ))
            }
          </tr>
          {
            data.map((item,index)=>(
                <tr key={index} className="baseRow" onClick={()=>this.props.onRowClick(item)}>
                  {
                    columns.map((c,index)=>(
                        <td className="border pl-2 py-2" key={index}>
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
