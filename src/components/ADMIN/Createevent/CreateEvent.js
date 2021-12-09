import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import './styles.css'

const CreateEvent = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [smallDesc, setSmallDesc] = useState('')
  const [mainDesc, setMainDesc] = useState(() => EditorState.createEmpty())

  const onEditorStateChange = (mainDesc) => {
    setMainDesc(mainDesc);
  }

  const HandleSubmit = () => {
    const content = mainDesc.getCurrentContent()
    const isEditorEmpty = !content.hasText();
    const lengthOfTrimmedContent = content.getPlainText().trim().length;
    console.log('isEditorEmpty =>',isEditorEmpty)
    console.log('lengthOfTrimmedContent =>',lengthOfTrimmedContent)
    if (title ==='' || date === '' || thumbnail === '' || smallDesc === '' || isEditorEmpty === true || lengthOfTrimmedContent <= 10){
      Swal.fire('Cannot Create Event !','All Fields Are Not Filled Up. Check for empty fields & try again.','warning')
      return
    }
    axios({
      method: 'POST',
      url:'http://localhost:4000/events/create',
      headers: {'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiMjE1ZTgwZjVmZjYxNjlkNjY3NDk3In0sImlhdCI6MTYzOTA2MDk2OCwiZXhwIjoxNjM5MDk2OTY4fQ.bcXx3HPI06XHTA7xYDQKEvymdZo_paTFsjD26ZpOZS8'},
      data: {
        "title": title,
        "date": date,
        "thumbnail":thumbnail,
        "smallDescription": smallDesc,
        "mainDescription": JSON.stringify(convertToRaw(mainDesc.getCurrentContent()))
      }
    }).then(res =>{
        Swal.fire('Event Created Successfully','','success')
        console.log(res)
    }).catch(err =>{
      console.error(err)
    })
    var POST =  convertToRaw(mainDesc.getCurrentContent())

    console.log(JSON.stringify(POST, null, 4))
  }

  return (
    <div className="admin-create-event-container">
      <h2 className="heading p-4">Create Event</h2>

      <div className="create-event-form">
        <h5 className="py-3 pl-2 m-0">Title</h5>
        <input className="form-control" type="text" placeholder="Enter Event Name" onChange={(e) => setTitle(e.target.value)} />
        <h5 className="py-3 pl-2 m-0">Event Date</h5>
        <input className="form-control" type="date" onChange={(e) => setDate(e.target.value)} />
        <h5 className="py-3 pl-2 m-0">Thumbnail Url</h5>
        <input className="form-control" type="url" placeholder="Enter thumbnail url" onChange={(e) => setThumbnail(e.target.value)} />
        <h5 className="py-3 pl-2 m-0">Small Description</h5>
        <textarea className="form-control" name="smallDescription" placeholder="Enter small description of the event" onChange={(e) => setSmallDesc(e.target.value)}></textarea>
        <h5 className="py-3 pl-2 m-0">Main Description</h5>
        <Editor
          defaultEditorState={mainDesc}
          editorState={mainDesc}
          onEditorStateChange={onEditorStateChange}
          wrapperClassName="demo-wrapper bg-white overflow-hidden"
          editorClassName="demo-editor form-control minh600"
          name="mainDescription"
        />
        <button
          className="btn text-white my-4 ml-3"
          onClick={HandleSubmit}
        >
          Create Event
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
