export interface IPlanDetail {
    planIsRecommended?: boolean,
    planPrice?: number,
    planName?: string,
    planText?: string,
    planFreeDomain: boolean,
    planGoogleAdsCredit: boolean,
    planMaxUsers: number,
    planSSLSecurity: boolean,
    planMaxProducts: number,
    planChatInbox: boolean,
    planUnlimitedStorage: boolean,
    planNoTransactionFee: boolean
   
}
export interface IPlan {
    planMonthly?: IPlanDetail[]
    planAnnually?: IPlanDetail[]
}