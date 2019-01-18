

import React from 'react'
import './layout.css'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Item = ({ data, key, collectData, i }) => {
  console.log(data,i)
  return (
   
    <li  key={key} className="logo design grid-unit col-lg-4 col-md-6 col-sm-12 col-xs-12" onClick={() => collectData(i)}>
      <a href="#" className="thumbnail" data-toggle="modal" data-target="#myModal" id="dosta_je_bilo" >
        <img src={data.node.image.file.url} alt="" />
        <div className="mask">
          <div className="meta">
            <div className="words">
              <span className="title">{data.node.title}</span>
              <span className="role">`{data.node.tags[0]}/{data.node.tags[1]}`</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default Item