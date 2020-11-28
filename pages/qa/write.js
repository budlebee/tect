import { React, useState } from 'react'
import Head from "next/head";
import { Router, useRouter } from "next/router";
import WritePost from '../../src/components/WritePost'

import { Col, Button, Form, Input, Spin } from 'antd';

const { TextArea } = Input

export default function QaWrite(){
    return (
        <>
            <Head>
                <title>{"새 질문글 작성"}, tect.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", marginBottom: "20px"  }}>
                New Question
            </div>
            <WritePost postType="questions" />
        </>
    )
}

export async function getStaticProps() {
    return {
      props: {},
    }
  }