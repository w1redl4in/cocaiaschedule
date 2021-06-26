import { Row, Typography, Space } from 'antd';

export const Sider = () => {
  return (
    <Row align="middle" justify="center" style={{ minHeight: '100vh' }}>
      <Space direction="vertical">
        <Typography.Text strong>Dashboard</Typography.Text>
        <Typography.Text>Dashboard</Typography.Text>
        <Typography.Text>Dashboard</Typography.Text>
        <Typography.Text>Dashboard</Typography.Text>
      </Space>
    </Row>
  );
};
