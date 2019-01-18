import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap'
import './popup.css'


const Popup = ({ activeItem, collectData }) => {

   

  if (!activeItem ) return null

  const { title } = activeItem.node
  const { tags } = activeItem.node

  console.log(activeItem, tags)
  return (
    <div className="row">
      <Modal isOpen={!!activeItem} onClick={collectData} >
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <ModalHeader className="float-right">
              <Button type="button" id="close" className="close " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></Button>
            </ModalHeader>

            <ModalBody>
              <section id="project">
                <div class="container">
                  <div class="row text-center">
                    <div class="col-sm-12">
                      <h1 class="section-color-2" id="project_name">{title}</h1>
                    </div>
                    <div class="col-sm-12">
                      <p class="section-color-2" id="tags">
                        {tags[0]} {tags[1]}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text-center">
                      <img src={activeItem.node.image.file.url} class="main-image" alt="" id="project_image" />
                    </div>
                    <div class="col-sm-8 col-sm-offset-2">
                      <p></p>
                    </div>
                  </div>
                </div>
              </section>
            </ModalBody>
          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </Modal>
    </div>
    // <!-- /.modal -->


  )

}
export default Popup