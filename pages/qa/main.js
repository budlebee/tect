import Head from 'next/head'
import { useEffect, useState } from "react";
import { Button } from 'antd';
import Post from '../../src/components/Post'
import makeIterableInMap from '../../src/functions/makeIterableInMap'

export default function QaMain({ questions }) {
  return (
    <>
      <Head>
        <title>{"Q&A"}, tect.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button type="primary" href="write">질문글 작성</Button>
      {questions.map((question)=>(
        <Post data={question} type="MainListElement" key={question.id} />
      ))}
    </>
    )
}


export async function getStaticProps() {
  const dbURL = 'https://next-example-e8a0d.firebaseio.com/questions' +'.json'
  const res = await fetch(dbURL, { method: 'GET'})
  const data = await res.json()
  const questions = makeIterableInMap(data)

  return {
    props: { questions }
  }
}