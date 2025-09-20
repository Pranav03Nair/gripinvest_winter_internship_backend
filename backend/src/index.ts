import app from './app';
import { startMaturityCheckJob } from './jobs/maturityCheck.job';
import { prisma } from './utils/prisma.util';

const PORT = process.env.PORT || 3000;

async function server() {
  try {
    // Cron Job
    startMaturityCheckJob();

    // Server Boot
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error starting server', err);
    await prisma.$disconnect();
  }
}

server();
