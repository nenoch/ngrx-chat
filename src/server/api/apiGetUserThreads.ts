import {Application, Request, Response} from "express";
import { findThreadsPerUser } from "../persistence/findThreadsPerUser";
import { dbMessages, dbUsers } from "../db-data";
import * as _ from "lodash";
import { Message } from "../../../shared/model/message";
import { AllUserData } from "../../../shared/to/all-user-data";

export function apiGetUserThreads(app: Application){
    app.route("/api/threads").get((req: Request, res: Response) => {
        const userId = 1;
        const threadsPerUser = findThreadsPerUser(userId);
        let messages: Message[] = [];
        let usersIds: string[] = [];

        threadsPerUser.forEach(thread => {
            const threadMessages: Message[] = _.filter(dbMessages,
                (message: any) => message.threadId == thread.id);
            messages = messages.concat(threadMessages);
            usersIds = usersIds.concat(_.keys(thread.users));
        });

        const users = _.uniq(usersIds.map(userId => dbUsers[userId]));

        const response: AllUserData = {
            users,
            messages,
                threads: threadsPerUser
        }
        res.status(200).json({response});
    });
}