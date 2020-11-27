import { React, useState } from 'react'
import Head from "next/head";
import { Router, useRouter } from "next/router";

import { Col, Button, Form, Input, Spin } from 'antd';

const { TextArea } = Input

export default function Write(){
    const router = useRouter()
    // const [isloading, setIsLoading] = useState(true)
    const [uploading, setUploading] = useState(false)
    const [qTitle, setQtitle] = useState('')
    const [qBody, setQbody] = useState('')
    const [qHashtags, setQhashtags] = useState('')



    const handleChange = (e) => {
        switch(e.target.id){
            case "qTitleInput":
                setQtitle(e.target.value)
            case "qBodyInput":
                setQbody(e.target.value)
            case "qHashtags":
                setQhashtags(e.target.value)
        }
    }

    async function upload(e){
        setUploading(true)
        const target = {
            user: "testUser",
            title: qTitle,
            body: qBody,
            hashtags: qHashtags,
            'created time': '',
            answers: '',
            replies: ''
        }
        const targetURL = 'https://next-example-e8a0d.firebaseio.com/questions.json'
        
        const result = await fetch(targetURL, { method: 'POST', body: JSON.stringify(target)})

        if(result.status == '200'){
            console.log(router.pathname)
            router.push('/qa/main')
        } else {
            throw new Error(res.statusText)
        }
      }

    return (
            <Spin spinning={uploading} size="large" tip="Loading..." >
                <Head>
                    <title>{"질문글 작성"}</title>
                    <meta name="description" content={"끼야앙"}></meta>
                </Head>
                <Form.Item>
                    <Input id="qTitleInput" placeholder="제목" onChange={handleChange} />
                </Form.Item>
                <Form.Item>
                    <TextArea id="qBodyInput" rows={10} placeholder="본문" onChange={handleChange}
                    style={{ resize: 'none'}} />
                </Form.Item>
                <Form.Item>
                    <Input id="qHashtags" placeholder="해시태그" onChange={handleChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="
                    imary" onClick={upload}>질문글 작성</Button>
                </Form.Item>
            </Spin>
    )
}
