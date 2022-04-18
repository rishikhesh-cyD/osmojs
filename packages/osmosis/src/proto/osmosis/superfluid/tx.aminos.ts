import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../amino.helpers";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLockResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export interface AminoMsgSuperfluidDelegate extends AminoMsg {
  type: "osmosis/superfluid/msg-superfluid-delegate";
  value: {
    sender: string;
    lockId: string;
    valAddr: string;
  };
}
export interface AminoMsgSuperfluidUndelegate extends AminoMsg {
  type: "osmosis/superfluid/msg-superfluid-undelegate";
  value: {
    sender: string;
    lockId: string;
  };
}
export interface AminoMsgSuperfluidUnbondLock extends AminoMsg {
  type: "osmosis/superfluid/msg-superfluid-unbond-lock";
  value: {
    sender: string;
    lockId: string;
  };
}
export interface AminoMsgLockAndSuperfluidDelegate extends AminoMsg {
  type: "osmosis/superfluid/msg-lock-and-superfluid-delegate";
  value: {
    sender: string;
    coins: {
      denom: string;
      amount: string;
    }[];
    valAddr: string;
  };
}
export const AminoConverter = {
  "/osmosis.superfluid.MsgSuperfluidDelegate": {
    aminoType: "osmosis/superfluid/msg-superfluid-delegate",
    toAmino: ({
      sender,
      lockId,
      valAddr
    }: MsgSuperfluidDelegate): AminoMsgSuperfluidDelegate["value"] => {
      return {
        sender,
        lockId,
        valAddr
      };
    },
    fromAmino: ({
      sender,
      lockId,
      valAddr
    }: AminoMsgSuperfluidDelegate["value"]): MsgSuperfluidDelegate => {
      return {
        sender,
        lockId,
        valAddr
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUndelegate": {
    aminoType: "osmosis/superfluid/msg-superfluid-undelegate",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUndelegate): AminoMsgSuperfluidUndelegate["value"] => {
      return {
        sender,
        lockId
      };
    },
    fromAmino: ({
      sender,
      lockId
    }: AminoMsgSuperfluidUndelegate["value"]): MsgSuperfluidUndelegate => {
      return {
        sender,
        lockId
      };
    }
  },
  "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
    aminoType: "osmosis/superfluid/msg-superfluid-unbond-lock",
    toAmino: ({
      sender,
      lockId
    }: MsgSuperfluidUnbondLock): AminoMsgSuperfluidUnbondLock["value"] => {
      return {
        sender,
        lockId
      };
    },
    fromAmino: ({
      sender,
      lockId
    }: AminoMsgSuperfluidUnbondLock["value"]): MsgSuperfluidUnbondLock => {
      return {
        sender,
        lockId
      };
    }
  },
  "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
    aminoType: "osmosis/superfluid/msg-lock-and-superfluid-delegate",
    toAmino: ({
      sender,
      coins,
      valAddr
    }: MsgLockAndSuperfluidDelegate): AminoMsgLockAndSuperfluidDelegate["value"] => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr
      };
    },
    fromAmino: ({
      sender,
      coins,
      valAddr
    }: AminoMsgLockAndSuperfluidDelegate["value"]): MsgLockAndSuperfluidDelegate => {
      return {
        sender,
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        valAddr
      };
    }
  }
};