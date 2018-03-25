import React from 'react'
import moment from 'moment'
class ContractPresentation extends React.Component{
  state = {
    accountManager: 'Nguyen Thi Quynh Anh',
    executive: 'Vu Thi Ha',
    budget: 0,
    signDate: moment().format('YYYY-MM-DD'),
    start: moment().format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD'),
    description: ''
  }
  constructor(){
    super()
    this._onValueChange = this._onValueChange.bind(this)
  }
  _onValueChange(field){
    return event => {
      this.setState({[field]: event.target.value})
    }
  }
  render(){
    const {accountManager, executive, budget, signDate, start, end, description} = this.state
    const {executives} = this.props
    console.log(signDate)
    return (
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="acccountManager">Account Manager</label>
              <input className="form-control" id="acccountManager" value={accountManager} readOnly/>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="executive">Account Executive</label>
              <select className="form-control" id="executive" value={executive} onChange={this._onValueChange('executive')}>
                {
                  executives.map((e,i)=>(<option key={i}>{e}</option>))    
                }
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="budget">Budget (k-VND)</label>
              <input type="number" className="form-control" id="budget" placeholder="Budget" 
                value={budget} onChange={this._onValueChange('budget')}/>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="signDate">Sign Date</label>
              <input type="date" className="form-control" id="signDate" placeholder="Sign date"
                value={signDate} onChange={this._onValueChange('signDate')}/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="startDate">Start Date</label>
              <input type="date" className="form-control" id="startDate" placeholder="Start date"
                value={start} onChange={this._onValueChange('start')}/>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="endDate">End Date</label>
              <input type="date" className="form-control" id="endDate" placeholder="End date"
                value={end} onChange={this._onValueChange('end')}/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="description">Description</label>
              <textarea rows={2} className="form-control" id="description" placeholder="Discription" 
                value={description} onChange={this._onValueChange('description')}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default ContractPresentation