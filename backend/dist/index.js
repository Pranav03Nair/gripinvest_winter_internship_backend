"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const maturityCheck_job_1 = require("./jobs/maturityCheck.job");
const prisma_util_1 = require("./utils/prisma.util");
const PORT = process.env.PORT || 3000;
async function server() {
    try {
        // Cron Job
        (0, maturityCheck_job_1.startMaturityCheckJob)();
        // Server Boot
        app_1.default.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error('Error starting server', err);
        await prisma_util_1.prisma.$disconnect();
    }
}
server();
//# sourceMappingURL=index.js.map