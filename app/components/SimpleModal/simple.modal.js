import React from 'react'
class SimpleModal extends React.Component{
  render(){
    const {display, onClose, Body} = this.props
    return (
      <div className="modal fade" id="simple_modal" tabIndex="-1" role="dialog" 
          aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
          ref={ref=>{
            if(ref){
              const element = $('#'+ref.id)
              element.modal({keyboard: false, backdrop:'static', show:false})
              element.modal(display?'show':'hide')
            }
          }}>
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" aria-label="Close"
                onClick={onClose}
                // data-dismiss="modal" 
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {Body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleModal