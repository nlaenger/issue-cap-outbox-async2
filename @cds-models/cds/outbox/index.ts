// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_';
export function _MessageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Message extends Base {
        ID?: string;
        timestamp?: string | null;
        target?: string | null;
        msg?: string | null;
        attempts?: number | null;
        partition?: number | null;
        lastError?: string | null;
        lastAttemptTimestamp?: string | null;
      static actions: {
      }
  };
}
export class Message extends _MessageAspect(__.Entity) {}
Object.defineProperty(Message, 'name', { value: 'cds.outbox.Messages' })
export class Messages extends Array<Message> {}
Object.defineProperty(Messages, 'name', { value: 'cds.outbox.Messages' })
