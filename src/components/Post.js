import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, Button, Skeleton, Popconfirm, message } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import getChildLength from '../../src/functions/getChildLength'

import WritePost from '../../src/components/WritePost'

export default function Post (props) {
  const router = useRouter()
  const data = props.data
  const postType = props.type
  const { Meta } = Card;

  const [visible, setVisible] = useState(false);
  const [onEdit, setOnEdit] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };


  async function deleteQuestion () {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      router.push('/qa/main')
      message.success('삭제 기능이 아직 추가되지 않았습니다.');
    }, 2000);

    // const dbURL = 'https://next-example-e8a0d.firebaseio.com/questions/' + data.id +'.json'
    // const res = await fetch(dbURL, { method: 'DELETE'})

    // setVisible(false);
    // setConfirmLoading(false);

    // if(res.status == 200){
    //   Router.push('/qa/main')
    // } else {
    //   throw new Error(res.statusText)
    // }
  }

  async function openQaEdit () {
    setOnEdit(true)
  }

  async function goToQaEdit () {
    router.push({
      pathname: '/qa/edit',
      query: {id: data.id}
    })
  }

  const DefaultComponentFromExtraFromCard = () => {
    return (
      <div>
          <Button shape="circle" icon={<EditOutlined />} onClick={openQaEdit}/>
          <Popconfirm
            title="정말로 삭제하실 건가요?"
            visible={visible}
            onConfirm={deleteQuestion}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
          >
            <Button shape="circle" icon={<DeleteOutlined />} onClick={showPopconfirm}/> 
          </Popconfirm> 
        </div>
    )
  }
  const DefaultComponentsFromActionsFromCard = () => {
    return ([
      <div style={{ float: "left", paddingLeft: '15px'}}>댓글 {getChildLength(data, 'replies')}개</div>,
      <div style={{ float: "left", paddingLeft: '15px'}}>{data.hashtags}</div>
    ])
  }
  const DefaultComponentsFromTitleFromCard = () => {
    return ([data.title])
  }
  const DefaultComponentMeta = (str) => {
    return (
      <Meta
        avatar={
          <span style={{ fontWeight: 'bold', fontSize: '20px'}}>{str}</span>
        }
        title={data.user}
        description={data.createdAt}
      />
    )
  }

  const showPost = () => {
    switch(postType){
      case "MainListElement":
        return (
          <>
            <Card
              extra = {
                <div>
                  <Button shape="circle" icon={<EditOutlined />} onClick={goToQaEdit}/>
                  <Popconfirm
                    title="정말로 삭제하실 건가요?"
                    visible={visible}
                    onConfirm={deleteQuestion}
                    okButtonProps={{ loading: confirmLoading }}
                    onCancel={handleCancel}
                  >
                    <Button shape="circle" icon={<DeleteOutlined />} onClick={showPopconfirm}/> 
                  </Popconfirm> 
                </div>
              }
              style={{ marginTop: 16 }}
              actions={[
                <div style={{ float: "left", paddingLeft: '15px'}}>
                  답변 {getChildLength(data, 'answers')}개, 댓글 {getChildLength(data, 'replies')}개
                </div>,
                <div style={{ float: "left", paddingLeft: '15px'}}>{data.hashtags}</div>
              ]}
              title={[
                <Link href={{
                  pathname: "/qa/[id]", 
                  query: {data: JSON.stringify(data)}}} as={`/qa/${data.id}`} key={data.id}>
                  {data.title}
                </Link>
                ]}
            >
              {DefaultComponentMeta('Q')}
              <div style={{ paddingTop: '10px'}}>{data.body}</div>
            </Card>
          </>
        )
      case "Question":
        return (
          <>
            {onEdit && (
              <WritePost postType="questions" onEdit={true} onEditData={data} />
            )}
            {!onEdit && (
              <Card
                extra = {DefaultComponentFromExtraFromCard('Q')}
                style={{ marginTop: 16 }}
                actions={[
                  <div style={{ float: "left", paddingLeft: '15px'}}>
                    답변 {getChildLength(data, 'answers')}개, 댓글 {getChildLength(data, 'replies')}개
                  </div>,
                  <div style={{ float: "left", paddingLeft: '15px'}}>{data.hashtags}</div>
                ]}
                title={DefaultComponentsFromTitleFromCard()}
              >
                {DefaultComponentMeta()}
                <div style={{ paddingTop: '10px'}}>{data.body}</div>
              </Card>
            )}
          </>
        )
      case "Answer":
        return (
          <Card
              style={{ marginTop: 16 }}
              actions={DefaultComponentsFromActionsFromCard()}
            >
              <Meta
                avatar={
                  <span style={{ fontWeight: 'bold', fontSize: '20px'}}>A</span>
                }
                title={data.user}
                description={data.createdAt}
              />
              <div style={{ paddingTop: '10px'}}>{data.body}</div>
          </Card>
        )
      
    }
  }

  return showPost()
}