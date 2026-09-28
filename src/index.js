import { loadConfig } from './config.js';

const config = loadConfig();

console.info(`Starting (log level: ${config.logLevel})`);

// Start your application here (HTTP server, workers, ...).

function shutdown(signal) {
  console.info(`${signal} received, shutting down`);
  // Close HTTP servers, database pools and timers here.
  process.exit(0);
}

// Node.js running as PID 1 in a container has no default signal handling,
// so without these handlers `docker stop` waits until it force-kills.
process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);
