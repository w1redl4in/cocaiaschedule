import { Row, Typography, Space } from 'antd';

export const Header = () => {
  return (
    <Row align="middle" justify="start" style={{ height: '100%' }}>
      <Space>
        <img
          width="40px"
          height="auto"
          src="https://image.flaticon.com/icons/png/512/2111/2111646.png"
          alt="logo"
        />
        <Typography.Title level={3} style={{ margin: 0 }}>
          Cocaias Schedule
        </Typography.Title>
      </Space>
    </Row>
  );
};
