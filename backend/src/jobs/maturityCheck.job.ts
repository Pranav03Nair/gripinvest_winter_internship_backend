import cron from 'node-cron';
import { maturedInvestments } from '../services/investment.service';

export const startMaturityCheckJob = () => {
  // Everyminute
  cron.schedule('* * * * *', async () => {
    try {
      const count = await maturedInvestments();
      console.log(`[CRON] Matured ${count} investments`);
    } catch (err) {
      console.error('[CRON] MaturityCheck Job Failed', err);
    }
  });

  console.log('[CRON] Maturity Check Job Scheduled');
};
