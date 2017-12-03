import { User } from "../model/user";
import { Thread } from "../model/thread";
import { Message } from "../model/message";

export interface AllUserData {
    users: User[];
    threads: Thread[];
    messages: Message[];
}