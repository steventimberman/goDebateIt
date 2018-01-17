import React from 'react'
import ReactDOM from 'react-dom'

function AddDebateEvent () {
	var event = document.createEvent('Event');
	event.initEvent('AddDebateNav', true, true);
	document.dispatchEvent(event);
}

var addDebate = React.createClass({

	getInitialState: function () {
		return {showModal: 'none'}
	},

	componentDidMount: function () {
		var self = this;
		document.addEventListener('addPostNav', function (e) {
			self.showModal();
		}, false);
	},
	showModal: function () {
		this.setState({showModal: 'inherit'});
	},
	closeModal: function () {
		this.setState({ showModal: 'none'});
	},
	addDebate: function () {
		var self = this;
		var date = new Date();
		date = date.toISOString();

		var sendData = {author: "", title: $('#addDebateModalTitle').val(), description: $('addDebateModalDescription'), date: date};
	
		$.ajax({
			url: 'http://127.0.0.1:8000/debate/api/',
			dataType: 'json',
			method: 'POST',
			data: sendData,
			success: function (data) {
				var id = data.id
				window.location.href = "http://127.0.0.1:8000/debate/" + id + "/";	
			}.bind(this),
			error: function (xhr, status, err) {
				console.error("http://127.0.0.1:8000/debate/api/", status, error.toString());
			}.bind(this)
		})

	},
	render: function () {
		var style = { display: this.state.showModal };
		var close = <button className="btn btn-default" onClick={this.closeModal}>Close</button>
		var addDebateBody = (
							<div>
								<lable>Title:</label>
								<input type="text" className="form-control" id="addDebateModalTitle" />

								<label>Description</label>
								<textarea className="form-control" id="addDebateModalDescription" />

								<button style = {{marginTop: 20}} className="btn btn-primary" onClick={this.addDebate}>Add Debate</button>
							</div>
							)

		return (
					<div>
						<AddDebateModal style={style} close={close} body={addDebateBody} />
					</div>		

				)

	}	
	

});

var AddDebateModal = React.createClass({
	render: function () {
		return(
			<div className="modal fade" tabindex="-1" role="dialog" id="create-debate-modal">
	            <div className="modal-dialog" role="document">
	                <div className="modal-content">
	                    <div className="modal-header">
	                        <button type="button" className="close"><span aria-hidden="true">&times;</span></button>
	                        <h4 className="modal-title">Add A New Debate</h4>
	                    </div>
	                    <div className="modal-body">
	                        {this.props.body}
	                    </div>
	                    <div className="modal-footer">
	                        {this.props.close}
	                    </div>
	                </div>
	            </div>
	        </div>
        )
    }    
})

React.render(
	<AddDebate />,
	document.getElementById('addDebate')
	)









