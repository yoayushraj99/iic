import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw,convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios'
import Swal from 'sweetalert2';
import '../Createevent/styles.css'
import './styles.css'

const EditEvent = (param) => {
	const [loading, setLoading] = useState(true)
	const AuthToken = localStorage.getItem("authToken")

	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')
	const [thumbnail, setThumbnail] = useState('')
	const [smallDesc, setSmallDesc] = useState('')
	const [mainDesc, setMainDesc] = useState(() => EditorState.createEmpty())
	const [lastUpdatedBy,setLastUpdatedBy] = useState()
	const [createdBy,setCreatedBy] = useState()
	const [createdAt,setCreatedAt] = useState()
	const [updatedAt,setUpdatedAt] = useState()
	
	useEffect(() => {
		axios({
			method: 'GET',
			url: `http://localhost:4000/events/${param.location.state}`
		}).then(res => {
			setTitle(res.data.title)
			setDate(res.data.date)
			setThumbnail(res.data.thumbnail)
			setSmallDesc(res.data.smallDescription)
			setCreatedAt(DateTimeConverter(res.data.createdAt))
			setUpdatedAt(DateTimeConverter(res.data.updatedAt))
			setMainDesc(EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.mainDescription))))
			setCreatedBy(res.data.createdBy.name)
			if ((res.data.lastUpdatedBy) !== null){
				setLastUpdatedBy(res.data.lastUpdatedBy.name)
			}
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
			url: `http://localhost:4000/events/${param.location.state}`,
			headers: { 'Authorization': 'AuthToken' },
			data: {
				"title": title,
				"date": date,
				"thumbnail": thumbnail,
				"smallDescription": smallDesc,
				"mainDescription": JSON.stringify(convertToRaw(content))
			}
		}).then(res => {
			Swal.fire('Event Updated Successfully', '', 'success')
		}).catch(err => {
			setLoading(false)
			if (err.response.status === 401) {
				window.location.href="/login"
			}else if(err.response.status === 500) {
				Swal.fire('Server Error !','Contact Support Immediately !','error')
			}else{
				Swal.fire('Unexpected Error Occured !','Contact Support Immediately !','error')
			}
		})
	}

	return (
		<div className="admin-create-event-container">
			<h2 className="heading p-4">Edit Event</h2>
			{loading ? <h1 className="text-center">Loading ...</h1>:
			<div className="create-event-form">
				<div className="update-info">
					<h6 className="py-2 m-0">Created At: {createdAt}</h6>
					<h6 className="py-2 m-0">Created By: {createdBy}</h6>
				</div>
				<div className="update-info">
					<h6 className="py-2 m-0">Last Updated: {(updatedAt == createdAt)? 'None': updatedAt}</h6>
					<h6 className="py-2 m-0">Last Updated By: {lastUpdatedBy ? lastUpdatedBy : 'None'}</h6>
				</div>
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
					toolbar={{
						options: ['inline', 'blockType', 'list', 'textAlign', 'link','colorPicker', 'embedded','image',],
						inline: {
						  inDropdown: false,
						  options: ['bold', 'italic', 'underline',],
						},
						list: {
						  options: ['unordered', 'ordered'],
						},
						textAlign: {
						  inDropdown: false,
						  className: undefined,
						  component: undefined,
						  dropdownClassName: undefined,
						  options: ['left', 'center', 'right'],
						},
						embedded:{
						  defaultSize: {
							height: '400',
							width: '100%',
						  },              
						},
						image: {
						  urlEnabled: true,
						  defaultSize: {
							height: 'auto',
							width: '100%',
						  },},
						}
					  }
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

const DateTimeConverter = (UTC_DATE) => {
	const date = new Date(UTC_DATE)
	return `${date.toLocaleDateString()}   ${date.toLocaleTimeString()}`
}
export default EditEvent;