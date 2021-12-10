import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw,convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import '../Createevent/styles.css'

const EditEvent = (param) => {
	const [loading, setLoading] = useState(true)

	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [thumbnail, setThumbnail] = useState('')
	const [smallDesc, setSmallDesc] = useState('')
	const [mainDesc, setMainDesc] = useState(() => EditorState.createEmpty())

	useEffect(() => {
		axios({
			method: 'GET',
			url: `http://localhost:4000/events/${param.location.state}`
		}).then(res => {
			console.log(JSON.stringify(res.data, null, 4))
			setTitle(res.data.title)
			setDate(res.data.date)
			setThumbnail(res.data.thumbnail)
			setSmallDesc(res.data.smallDescription)
			setMainDesc(EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.mainDescription))))
			setLoading(false)
		}).catch(err => {
			Swal.fire('Error', `${err}`, 'error')
		})
	}, [loading])

	const onEditorStateChange = (mainDesc) => {
		setMainDesc(mainDesc);
	}

	const HandleSubmit = () => {
		const content = mainDesc.getCurrentContent()
		const isEditorEmpty = !content.hasText();
		const lengthOfTrimmedContent = content.getPlainText().trim().length;
		console.log('isEditorEmpty =>', isEditorEmpty)
		console.log('lengthOfTrimmedContent =>', lengthOfTrimmedContent)
		if (title === '' || date === '' || thumbnail === '' || smallDesc === '' || isEditorEmpty === true || lengthOfTrimmedContent <= 10) {
			Swal.fire('Cannot Create Event !', 'All Fields Are Not Filled Up. Check for empty fields & try again.', 'warning')
			return
		}
		axios({
			method: 'PUT',
			url: 'http://localhost:4000/events/create',
			headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiMjE1ZTgwZjVmZjYxNjlkNjY3NDk3In0sImlhdCI6MTYzOTEyMjM0NCwiZXhwIjoxNjM5NzI3MTQ0fQ.PJJ7VuqH-I1iA1LPkviFLinHMScZTFFOgsIXrWhTISY' },
			data: {
				"title": title,
				"date": date,
				"thumbnail": thumbnail,
				"smallDescription": smallDesc,
				"mainDescription": JSON.stringify(convertToRaw(mainDesc.getCurrentContent()))
			}
		}).then(res => {
			Swal.fire('Event Updated Successfully', '', 'success')
		}).catch(err => {
			Swal.fire('Error', `${err}`, 'error')
		})
		var POST = convertToRaw(mainDesc.getCurrentContent())

		console.log(JSON.stringify(POST, null, 4))
	}

	return (
		<div className="admin-create-event-container">
			<h2 className="heading p-4">Edit Event</h2>
			{loading ? <h1 className="text-center">Loading ...</h1>:
			<div className="create-event-form">
				<h5 className="py-3 pl-2 m-0">Title</h5>
				<input className="form-control" type="text" placeholder="Enter Event Name" value={title} onChange={(e) => setTitle(e.target.value)} />
				<h5 className="py-3 pl-2 m-0">Event Date</h5>
				<input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
				<h5 className="py-3 pl-2 m-0">Thumbnail Url</h5>
				<input className="form-control" type="url" placeholder="Enter thumbnail url" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
				<h5 className="py-3 pl-2 m-0">Small Description</h5>
				<textarea className="form-control" name="smallDescription" placeholder="Enter small description of the event" value={smallDesc} onChange={(e) => setSmallDesc(e.target.value)}></textarea>
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
					Edit Event
				</button>
			</div>
			}
		</div>
	);
};

export default EditEvent;