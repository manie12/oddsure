export interface BasicVars {

    totalOdds: string;
    home: string;
    away: string;
    oddsToday: string;

}
export interface BasicVarsId {
    id: number;
    totalOdds: string;
    home: string;
    away: string;
    oddsToday: string;
    createdAt: string;

}
export interface FreeVarsId {
    id: number;
    home: string;
    away: string;
    pick: string;
    createdAt: string;

}
export interface FreeVars {

    home: string;
    away: string;
    pick: string;

}
export interface PreviousVarsId {
    id: number;
    date: string;
    home: string;
    away: string;
    gameType: string;

}
export interface PreviousVars {

    date: string;
    home: string;
    away: string;
    gameType: string;

}

export interface BasicData {
    getBasicTip: BasicVarsId[];
}

export interface GoldenData {
    getGoldenTip: BasicVarsId[];
}

export interface VipData {
    getVipTip: BasicVarsId[];
}

export interface FreeData {
    getFreeTip: FreeVarsId[];
}
export interface PreviousData {
    getPreviouis: PreviousVarsId[];
}

