import { CommonProps, Component } from '../types';
import { createNode } from '../domHelper';

interface Props extends CommonProps {
  message: string;
}

const EmptyMessage: Component<Props> = ({ message = '' }) => {
  const $emptyMessage = createNode(`
    <div class="empty-message-wrapper">
      <span class="empty-message">텅-</span>
      <span class="empty-description">${message}</span>
    </div>
  `);

  return $emptyMessage;
};

export default EmptyMessage;
