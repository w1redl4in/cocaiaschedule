import {
  Button as AntdButton,
  Row,
  Form,
  Input,
  Typography,
  Space,
} from 'antd';
import { Store } from 'rc-field-form/lib/interface';
import { telegramConfig } from '../config';
import { TelegramClient } from '../services/telegram';

export const Button = () => {
  const handleTelegramMessage = (values: Store) => {
    TelegramClient.sendMessage(telegramConfig.chatId, values.message);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: 'calc(100vh - 200px)' }}
    >
      <Form layout="vertical" onFinish={handleTelegramMessage}>
        <Space direction="vertical">
          <Typography.Title>Enviar mensagem</Typography.Title>
          <Form.Item
            label="Mensagem"
            name="message"
            rules={[
              {
                required: true,
                message: 'O campo mensagem é obrigatório',
              },
            ]}
          >
            <Input placeholder="Mensagem" />
          </Form.Item>

          <AntdButton type="primary" htmlType="submit">
            Enviar mensagem
          </AntdButton>
        </Space>
      </Form>
    </Row>
  );
};
