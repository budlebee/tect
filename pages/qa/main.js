import Head from 'next/head'
import { useEffect, useState } from "react";
import { Button } from 'antd';
import Post from '../../src/components/Post'
import makeIterableInMap from '../../src/functions/makeIterableInMap'

export default function QaMain() {
  const [isloading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState([])
  

  async function getData() {
    const dbURL = 'https://next-example-e8a0d.firebaseio.com/' + 'questions' +'.json'
    const res = await fetch(dbURL, { method: 'GET'})
    const data = await res.json()

    // let lst = []

    let lst = makeIterableInMap(data)
    setQuestions(lst)
    setIsLoading(false)

  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <>
      <Head>
        <title>{"Q&A"}, tect.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isloading && (
        <div style={{ padding: "300px 0"}}>
          Loading
        </div>
      )}
      {!isloading && (
        <>
          <Button type="primary" href="write">질문글 작성</Button>
          {questions.map((question)=>(
            <Post data={question} key={question.id} />
          ))}
        </>
      )}
    </>
    )
}