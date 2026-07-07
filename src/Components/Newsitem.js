import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
        <div  className="card" style={{width: "18rem"}}>
  <img src="https://live-production.wcms.abc-cdn.net.au/ced6d4754f9bcbf5aa8e41edde7c61db?impolicy=wcms_watermark_news&cropH=432&cropW=769&xPos=515&yPos=267&width=862&height=485&imformat=generic"  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <a href="/"  className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
