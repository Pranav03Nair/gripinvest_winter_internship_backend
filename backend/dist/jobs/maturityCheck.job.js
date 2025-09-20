"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMaturityCheckJob = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const investment_service_1 = require("../services/investment.service");
const startMaturityCheckJob = () => {
    // Everyday - At 00:00
    node_cron_1.default.schedule('* * * * *', async () => {
        try {
            const count = await (0, investment_service_1.maturedInvestments)();
            console.log(`[CRON] Matured ${count} investments`);
        }
        catch (err) {
            console.error('[CRON] MaturityCheck Job Failed', err);
        }
    });
    console.log('[CRON] Maturity Check Job Scheduled');
};
exports.startMaturityCheckJob = startMaturityCheckJob;
//# sourceMappingURL=maturityCheck.job.js.map