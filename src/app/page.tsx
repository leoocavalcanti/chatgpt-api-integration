'use client';
import { ChatArea } from '@/components/ChatArea';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Chat } from '@/types/Chat';
import { useState } from 'react';

const Page = () => {

  const [sidebarOpened, setSidebarOpened] = useState(true);
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: "Bla blu",
    messages: [
      {id: '99', author: 'me', body: 'Olá!'},
      {id: '100', author: 'ai', body: 'Olá, tudo bom?'},
    ]
  });

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () => {


  };

  const handleNewChat = () => {


  };

  return (
    <main className="flex min-h-screen bg-gpt-gray text-white">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div className="w-40 m-auto h-24 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>

      </Sidebar>

      <section className="flex flex-col w-full">

          <Header
            openSidebarClick={openSidebar}
            title={`bla bla bla`}
            newChatClick={handleNewChat}
          />

          <ChatArea chat={chatActive}/>

      </section>

    </main>
  );
};

export default Page;
