/* eslint-disable */
import { toBuffer } from "@concordium/web-sdk";
import moment from "moment";

export function decodeString(buffer: any, offset: number) {
    const length = buffer.readUInt32LE(offset);
    offset += 4;
    return [
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        buffer.slice(offset, offset + length).toString("utf8"),
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        offset + length,
    ];
}

export function decodeStrings(buffer: any, offset: number) {
    const length = buffer.readUInt32LE(offset);
    offset += 4;
    const res: any[] = [];
    for (let i = 0; i < length; i++) {
        const [str, nextOffset] = decodeString(buffer, offset);
        offset = nextOffset;
        res.push(str as never);
    }
    return [res, offset];
}

export function decodeView(result: string) {
    const offset0 = 0;
    const buffer = toBuffer(result, "hex");
    const [descriptionText, offset1] = decodeString(buffer, offset0);
    const endTimestamp = buffer.readBigUInt64LE(offset1);
    const endTime = moment.unix(Number((endTimestamp as bigint) / BigInt(1000)));
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    const [opts, offset2]: any = decodeStrings(buffer, offset1 + 8);
    const numOptions = buffer.readUInt32LE(offset2);
    return {
        descriptionText,
        endTime,
        opts,
        numOptions,
    };
}

export function decodeVotes(votesResult: any[]) {
    const votes = new Array(0);
    votesResult.forEach((element: { returnValue: string }) => {
        const offset0 = 0;
        const buffer = toBuffer(element.returnValue, "hex");
        const [voteCount] = [buffer.readUInt32LE(offset0), offset0 + 4];
        votes.push(voteCount);
    });
    return votes;
}
