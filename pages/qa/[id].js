import Head from 'next/head'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Button} from 'antd';
import CommentComponent from '../../src/components/Comment'
import makeIterableInMap from '../../src/functions/makeIterableInMap'
import Post from '../../src/components/Post'
import WritePost from '../../src/components/WritePost'


export default function QuestionAnswer({ question }) {
    return (
        <>
            <Head>
                <title>{"Q&A"}, tect.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Button type="primary" href="write">질문글 작성</Button>
            <Post data={question} type="Question" />
            <CommentComponent data={question}/>
            {makeIterableInMap(question.answers).map((answer) => (
                <Post data={answer} type="Answer" key={answer.id} />
            ))}
            <div style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", marginTop: "50px", marginBottom: "20px"  }}>
                Your Answer
            </div>
            <WritePost parentLoc="questions" parentID={question.id} postType="answers" />
        </>
    )
  }

export async function getServerSideProps(context) {
    const id = context.query.id

    let data = {}
    if (context.query.data) {
        data = JSON.parse(context.query.data)
    } else {
        const dbURL = 'https://next-example-e8a0d.firebaseio.com/questions/' + id +'.json'
        const res = await fetch(dbURL)
        data = await res.json()
    }

    data['id'] = id
    const question = data
  
    return {
      props: {question},
    }
  }