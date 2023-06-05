import { Conversation, Message, User } from "@prisma/client";

export type FullmessageType = Message & {
    sender: User,
    seen: User[]
};

export type FullConversationType = conversation & {
    users: User[],
    messages: FullmessageType[],
};