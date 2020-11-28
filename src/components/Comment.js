import { React, useState, useRef, useEffect } from 'react'
import { Comment, Avatar, Card, Skeleton, Form, Button, List, Input } from 'antd';
import moment from 'moment'

import makeIterableInMap from '../../src/functions/makeIterableInMap'

const { TextArea } = Input;

export default function CommentComponent ({ data }) {

	// async function deleteQuestion() {

	// }

	const [comments, setComments] = useState(makeIterableInMap(data.replies))
	const [submitting, setSubmitting] = useState(false)
	const [value, setValue] = useState('')

	const CommentList = ({ comments }) => (
		<List
			dataSource={comments}
			itemLayout="horizontal"
			renderItem={props => <Comment {...props} />}
		/>
	)

	const onChange = (e) => {
		e.preventDefault()
		setValue(e.target.value)
	}

	async function handleSubmit(){
		if (!value) {
			return;
		}

		setSubmitting(true)

		setTimeout(() => {
			setSubmitting(false)
			setComments([
				{
					author: 'testUser',
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
					content: <p>{value}</p>,
					datetime: moment().fromNow()
				},
				comments
			])
			setValue('')
		}, 1000)
	}
	return (
			<>
				{comments.length > 0 && <CommentList comments={comments} />}
				<Comment
				avatar={
						<Avatar
						src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						alt="유저 이미지"
						/>
				}
				content={
				<>
						<Form.Item>
						<TextArea rows={4} onChange={onChange} placeholder="Write a comment" value={value} />
						</Form.Item>
						<Form.Item>
						<Button htmlType="submit" loading={submitting} onClick={handleSubmit} type="primary">
								Add Comment
						</Button>
						</Form.Item>
				</>
				}
				/>
			</>
	)
}