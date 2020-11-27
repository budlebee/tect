import Head from 'next/head'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Button} from 'antd';
import Question from '../../src/components/Question'
import CommentComponent from '../../src/components/Comment'
import Answer from '../../src/components/Answer'
import makeIterableInMap from '../../src/functions/makeIterableInMap'


export default function QuestionAnswer() {
    const [isLoading, setIsLoading ] = useState(true)
    const [question, setQuestion ] = useState({})
    const router = useRouter()
    const id = router.query.id
    const data = router.query.data

    async function getData(){
        const target = window.location.href.split('/').slice(-1)[0]
        const dbURL = 'https://next-example-e8a0d.firebaseio.com/' + 'questions/' + target +'.json'
        const res = await fetch(dbURL, { method: 'GET'})
        const dbData = await res.json()
        
        setQuestion(dbData)
    }

    useEffect(()=>{
        if (data) {
            setQuestion(JSON.parse(data))
        }else{
            getData()
        }
        setIsLoading(false)
    }, [])

    return (
        <div>
        <Head>
            <title>{"Q&A"}, tect.dev</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Button type="primary" href="write">질문글 작성</Button>
        {isLoading && (
        <div style={{ padding: "300px 0"}}>
            Loading
        </div>
        )}
        {!isLoading && (
            <>
                <Question data={question} key={question.id} />
                <CommentComponent data={question}/>
                {makeIterableInMap(question.answers).map((answer) => (
                    <Answer data={answer}/>
                ))}
            </>
        )}
        </div>
    )
  }