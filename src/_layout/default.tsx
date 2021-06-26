import { Layout } from 'antd';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sider } from '../components/Sider';

const {
  Sider: AntdSider,
  Header: AntdHeader,
  Content,
  Footer: AntdFooter,
} = Layout;

export const DefaultLayout = ({ children }: any) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AntdSider style={{ background: '#2AA5F6' }}>
        <Sider />
      </AntdSider>
      <Layout>
        <AntdHeader style={{ background: 'white' }}>
          <Header />
        </AntdHeader>
        <Content style={{ background: 'white' }}>{children}</Content>
        <AntdFooter style={{ background: 'white' }}>
          <Footer />
        </AntdFooter>
      </Layout>
    </Layout>
  );
};
