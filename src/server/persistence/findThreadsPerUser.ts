import { Thread } from "../../../shared/model/thread";
import { dbThreads } from "../db-data";
import * as _ from 'lodash';

export function findThreadsPerUser(userId: number) {
    const allThreads: Thread[] = _.values<Thread>(dbThreads);
    return _.filter(allThreads, thread =>
        _.includes(_.keys(thread.users), userId.toString())
    )
}