import React from 'react'
import moment from 'moment'
class ContractPresentation extends React.Component{
  state = {
    executive: '',
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
    console.log(signDate)
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <input type="number" className="form-control" id="budget" placeholder="Budget" 
              value={budget} onChange={this._onValueChange('budget')}/>
          </div>
          <div className="form-group">
            <label htmlFor="signDate">Sign Date</label>
            <input type="date" className="form-control" id="signDate" placeholder="Sign date"
              valuel={signDate} onChange={this._onValueChange('signDate')}/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
export default ContractPresentation