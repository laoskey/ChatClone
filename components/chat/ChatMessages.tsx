"use client";

import { Member } from "@prisma/client";
import ChatWelecome from "@/components/chat/ChatWelecome";
import useChatQuery from "@/lib/hooks/useChatQuery";

interface ChatMessagesProps {
  name: string;
  member: Member;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
  type: "channel" | "conversation";
}
function ChatMessages({
  name,
  member,
  chatId,
  apiUrl,
  socketQuery,
  socketUrl,
  paramKey,
  paramValue,
  type,
}: ChatMessagesProps) {
  const queryKey = `chat:${chatId}`;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useChatQuery({ queryKey, paramKey, apiUrl, paramValue });

  return (
    <div className='flex-1 flex flex-col py-4 overflow-y-auto'>
      <ChatWelecome
        type={type}
        name={name}
      />
    </div>
  );
}

export default ChatMessages;
