import React from 'react';
import Router from 'next/router'

class createProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      collaborators:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Tutorial created!: ' + JSON.stringify(this.state) );
    event.preventDefault();

    Router.push('/overview')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="inputSection">
        <label>Tutorial Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <small id="title-preview">Repo name: {`https://github.com/usernname/...`} </small>
        </div>
        <div className="inputSection">
        <label>Cheeky Description</label>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          <small>A short description of what someone might expect to learn from this tutorial</small>
        </div>
        <div className="inputSection">
        <label>Add Collaborators</label>
          <input type="text" name="collaborators" value={this.state.collaborators} onChange={this.handleChange} />
          <small>e.g.: @codingtrain, @shiffman </small>
        </div>

        <div className="inputSection">
        <input type="submit" value="Create!" />
        </div>

        <style jsx>{`
          form{
            width:100%;
            max-width:680px;
            border: 2px solid black;
            height:100%;
            padding:10px;
            display:flex;
            flex-direction:column;
          }

          *{
            box-sizing:border-box;
          }

          form small{
            margin:4px 0px 4px 0px;
          }

          form .inputSection{
            width:100%;
            margin:10px 0px 10px 0px;
          }

          .inputSection label{
            font-size:36px;
            font-weight:bold;
            margin-bottom:10px;
          }
          
          form input[name=name],
          form textarea,
          form input[name=collaborators]{
            width:100%;
            border:2px solid black;
          }

          form input[name=name]{
            height:60px;
            background-color:#F58C93;
          }

          form input[name=collaborators]{
            height:60px;
            background-color:#F69852;
          }

          form textarea{
            height:150px;
             resize: none;
             background-color:#A0CEDE;
             border:2px solid black;
             box-sizing: border-box;
          }

          form input[type=submit]{
            height:60px;
            width:100%;
            font-size:36px;
            margin: 20px 0px 0px 0px;
            background:none;
            border:2px solid black;
            {/*border:none;*/}
            background-color:#01BACE;
            color:white;
          }
          `}
        </style>
      </form>
    );
  }
}

export default createProjectForm