import { TelegramClient as TelegramLib } from 'messaging-api-telegram';
import { telegramConfig } from '../config';

export const TelegramClient = new TelegramLib({
  accessToken: telegramConfig.token,
});
