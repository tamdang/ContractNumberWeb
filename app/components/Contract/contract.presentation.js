import React from 'react'
import moment from 'moment'
class ContractPresentation extends React.Component{
  state = {
    executive: 'Vu Thi Ha',
    budget: 0,
    signDate: '2018-03-04',
    start: Date(),
    end: Date(),
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
    const {executive, budget, signDate, start, end, description} = this.state
    const {executives} = this.props
    console.log(signDate)
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="executive">Account Executive</label>
            <select className="form-control" id="executive" value={executive} onChange={this._onValueChange('executive')}>
              {
                executives.map((e,i)=>(<option key={i}>{e}</option>))    
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea rows={3} className="form-control" id="description" placeholder="Discription" 
              value={description} onChange={this._onValueChange('description')}/>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <input type="number" className="form-control" id="budget" placeholder="Budget" 
              value={budget} onChange={this._onValueChange('budget')}/>
          </div>
          <div className="form-group">
            <label htmlFor="signDate">Sign Date</label>
            <input type="date" className="form-control" id="signDate" placeholder="Sign date"
              value={signDate} onChange={this._onValueChange('signDate')}/>
          </div>
        </form>
      </div>
    )
  }
}
export default ContractPresentation