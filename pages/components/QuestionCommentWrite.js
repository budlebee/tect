import React, { useState } from 'react'
import firebase from 'firebase/app';
import fire, { db } from '../../firebaseConfig';

import { Form, Input, Comment, Button, List, Typography, Card, Pagination } from 'antd'
const { TextArea } = Input;


const QuestionCommentWrite = (props) => {
	const [ content, setContent ] = useState('')
	const [ submitting, setSubmitting ] = useState(false)

	async function onClickContent () {
		if (!content) {
			return;
		}
		// 아무 내용도 없으면 전송이 안 됨.

		let questionDoc = await db.collection('questions').doc(props.questionID);
		let date = new Date();
		let now = firebase.firestore.Timestamp.fromDate(new Date());
		let commentsInfo = {
			content: content,
			createdAt: now,
			author: {
				nickname: '임시로 고정된 닉네임',
				uid: '임시 user uid',
			},
		}
    let setToAnswerInQuestion = await questionDoc.update({
      comments: [...props.comments, commentsInfo],
		})
		
		window.location.href = `/questions/${props.questionID}`;
	}

	const onChange = (e) => {
		e.preventDefault()
		setContent(e.target.value)	
	}
	return(
		<Comment
			content={
				<>
					<Form.Item key={"Formitem_1"}>
						<TextArea
						rows={4}
						onChange={onChange}
						placeholder="Write a comment"
						value={content}
						spellCheck={false}
						/>
					</Form.Item>
					<Form.Item key={"Formitem_2"}>
						<Button
						id="addCommentBtn"
						key={"submitCommentButton"}
						loading={submitting} onClick={onClickContent} type="default">
							댓글 작성
						</Button>
					</Form.Item>
				</>
			}
		/>
	)
}

export default React.memo(QuestionCommentWrite)