export interface Thread {
    id: number;
    messageIds: number[];
    // map {user: unread messages number}
    users: {[key:number]:number};
}