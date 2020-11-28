import { React, useState, useRef, useEffect } from 'react'
import Head from "next/head";
import {useRouter} from 'next/router'
import { Button, Form, Input, Spin } from 'antd';
import { Header } from 'antd/lib/layout/layout';

const { TextArea } = Input

export default function WritePost(props){
    // routing 코드가 제대로 동작하려면 props의 형식이 일치해야함.
    // props에는 parentLoc, parentID, postType이 있고
    // postType은 무조건 작성해야 함.
    // answer가 아니면 나머지 두 arg는 필요 없음.
    // 이 props들은 나중에 firebase에 create할 때 주소의 인자로 사용되므로
    // id를 제외한 인자는 모두 복수형이다. (아마)

    // 사용례: <WritePost parentLoc="questions" parentID={question.id} postType="answers" />
    const router = useRouter()
    const [uploading, setUploading] = useState(false)

    const [ visited, setVisited ] = useState(true)


    let initTitle, initBody, initHashtags
    if (visited && props.onEditData){
        initTitle = props.onEditData.title
        initBody = props.onEditData.body
        initHashtags = props.onEditData.hashtags

        setVisited(false)
    }

    const [postTitle, setPostTitle] = useState(initTitle)
    const [postBody, setPostBody] = useState(initBody)
    const [postHashtags, setPostHashtags] = useState(initHashtags)

    function PostTitleComponent() {
        return(
            <Form.Item key="PostTitleComponent_FormItem">
                <Input 
                id="postTitleInput" 
                placeholder="제목" 
                onChange={handleChange}
                value={postTitle}
                key="PostTitleComponent_Input"
                />
            </Form.Item>
        )
    }
    const PostBodyComponent = () => {
        return (
            <Form.Item key="PostBodyComponent_FormItem">
                <TextArea 
                id="postBodyInput" 
                rows={10} placeholder="본문"
                onChange={handleChange}
                value={postBody}
                key="PostBodyComponent_Input"
                style={{ resize: 'none'}} />
            </Form.Item>
        )
    }
    const PostHashtagsComponent = () => {
        return (
            <Form.Item key="PostHashtagsComponent_FormItem">
                <Input 
                id="postHashtags"
                placeholder="해시태그"
                onChange={handleChange}
                value={postHashtags}
                key="PostHashtagsComponent_Input"
                />
            </Form.Item>
        )
    }
    function ShowContent() {
        switch(props.postType) {
            case "questions":
                return (
                    <>
                        {PostTitleComponent()}
                        {PostBodyComponent()}
                        {PostHashtagsComponent()}
                        {props.onEditData && (
                            <>
                                <Button type="primary" key="questions_Button" onClick={upload}>질문글 수정</Button>
                                <Button type="primary" key="questions_Button" onClick={()=>router.back()}>수정 취소</Button>
                            </>
                        )}
                        {!props.onEditData && (
                            <Button type="primary" key="questions_Button" onClick={upload}>질문글 작성</Button>
                        )}
                    </>
                )
            case "answers":
                return (
                    <>
                        {PostBodyComponent()}
                        {PostHashtagsComponent()}
                        <Button type="primary" onClick={upload} key="answers_Button" onClick={upload}>답변 작성</Button>
                    </>
                )
            case "articles":
                return (
                    <>
                        {PostTitleComponent()}
                        {PostBodyComponent()}
                        {PostHashtagsComponent()}
                        <Button type="primary" onClick={upload} key="articles_Button" onClick={upload}>게시글 작성</Button>
                    </>
                )
            default:
                break
        }
    }

    const handleChange = (e) => {
        switch(e.target.id){
            case "postTitleInput":
                setPostTitle(e.target.value)
                break
            case "postBodyInput":
                setPostBody(e.target.value)
                break
            case "postHashtags":
                setPostHashtags(e.target.value)
                break
            default:
                break
        }
    }

    async function upload(e){
        setUploading(true)
        const now =  new Date()
        const target = {
            user: "testUser",
            title: postTitle,
            body: postBody,
            // postBody는 textarea의 ref라 
            // postBody.current는
            // string이 아닌 textarea 객체를 받아옴.
            //
            // body: postBody.current.state.value
            hashtags: postHashtags,
            createdAt : now.toISOString()
        }


        let pathArr = []
        if(props.parentLoc && props.parentLoc != ''){
            pathArr.push(props.parentLoc + '/')
        }
        if(props.parentID && props.parentID != ''){
            pathArr.push(props.parentID + '/')
        }
        if(props.postType && props.postType != ''){
            pathArr.push(props.postType)
        } else {
            throw new Error(`essential args invalid: ${typeof(props.postType)}, ${props.postType}`)
        }
        if(props.onEditData){
            pathArr.push('/' + props.onEditData.id)
        }



        const targetURL = 'https://next-example-e8a0d.firebaseio.com/' + pathArr.join('') +'.json'
        let result = ''
        if(props.onEditData){
            let headers = new Headers()
            headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, UPDATE")
            result = await fetch(targetURL, { 
                method: 'UPDATE', 
                headers: headers,
                body: JSON.stringify(target), 
                mode: 'cors',
            })
        } else{
            result = await fetch(targetURL, { method: 'POST', body: JSON.stringify(target)})
        }


        if(result.status == '200'){
            switch(props.postType){
                case "answers":
                    router.reload()
                    break
                case "questions":
                    router.push('/qa/main')
                    break
            }
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
            
            {/* <ShowContent key={"fuckfuck"}/> */}
            {ShowContent()}
        </Spin>
    )
}