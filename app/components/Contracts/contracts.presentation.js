import React from 'react'
import BaseTable from '../BaseTable'
const ContractsPresentation = (props) => {
  const columns = [
    {
      name: 'Số hợp đồng',
      field: 'contractNumber'
    },
    {
      name: 'Tên hợp đồng',
      field: 'discription'
    },
    {
      name: 'Số tiền',
      field: 'budget'
    },
    {
      name: 'Project Manager',
      field: 'accountExecutive'
    },
    {
      name: 'Ngày bắt đầu',
      field: 'start'  
    }
  ]
  const data = [
    {
      contractNumber: '1234',
      discription: 'abc',
      budget: 1234,
      accountExecutive: 'Tam',
      start: '2018-06-12'
    },
    {
      contractNumber: '2345',
      discription: 'abc',
      budget: 1234,
      accountExecutive: 'Tam',
      start: '2018-06-12'
    },
    {
      contractNumber: '3456',
      discription: 'abc',
      budget: 1234,
      accountExecutive: 'Tam',
      start: '2018-06-12'
    },
  ]
  return (
    <BaseTable columns={columns} data={data}/>
  )
}
export default ContractsPresentation