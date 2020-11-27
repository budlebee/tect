// import '../styles/globals.css'
import "../styles/antd.less";
// import '../styles/index.css';
// import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useRouter } from 'next/router'

import Link from "next/link";

const { Header, Content, Footer } = Layout;


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  
  const set_defaultKey = () => {
    const category = router.pathname.split('/')[1]
    switch(router.pathname) {
      case '':
        return '1'
      case 'article' :
        return '2'
      case 'qa ' :
        return '3'
      default:
        return ''
    }
  }
  return (
    <Layout className="layout">
    <Header>
      <div className="logo">
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={set_defaultKey()}>
        <Menu.Item key="1">
          <Link href="/" as={'/'}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/article/main" as={'/article/main'}>Article</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/qa/main" as={'/qa/main'}>{'Q&A'}</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', margin: '20px 0' }}>
      <div className="site-layout-content">
        <Component {...pageProps} />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}

export default MyApp