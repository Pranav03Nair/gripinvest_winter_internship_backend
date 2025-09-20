export declare const getLogsByUserId: (userId: string) => Promise<{
    id: bigint;
    email: string | null;
    created_at: Date | null;
    endpoint: string;
    http_method: import("../../generated/prisma").$Enums.http_type;
    status_code: number;
    error_message: string | null;
    user_id: string | null;
}[]>;
export declare const getLogsByEmail: (email: string) => Promise<{
    id: bigint;
    email: string | null;
    created_at: Date | null;
    endpoint: string;
    http_method: import("../../generated/prisma").$Enums.http_type;
    status_code: number;
    error_message: string | null;
    user_id: string | null;
}[]>;
export declare const getErrorSummary: (userId?: string, email?: string) => Promise<string>;
//# sourceMappingURL=transactionLog.service.d.ts.map