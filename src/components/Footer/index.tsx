import { ChatMessageInput } from '../ChatMessageInput';

type Props = {
  onSendMessage: (message: string) => void;
  disabled: boolean;
};

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput disabled={disabled} onSend={onSendMessage} />

        <div className="pt-3 text-center text-xs text-gray-300">
          Desenvolvido por Leonardo Cavalcanti.
        </div>
      </div>
    </footer>
  );
};
