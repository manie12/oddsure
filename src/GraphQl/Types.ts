export interface BasicVars {
    id: number;
    totalOdds: string;
    home: string;
    away: string;
    oddsToday: string;
}
export interface FreeVars {
    id: number;
    home: string;
    away: string;
    pick: string;

}
export interface PreviousVars {
    id: number;
    date: string;
    home: string;
    away: string;
    gameType: string;

}

export interface BasicData {
    getBasicTip: BasicVars[];
}

export interface GoldenData {
    getGoldenTip: BasicVars[];
}

export interface VipData {
    getVipTip: BasicVars[];
}

export interface FreeData {
    getFreeTip: FreeVars[];
}
export interface PreviousData {
    getPreviouis: PreviousVars[];
}

