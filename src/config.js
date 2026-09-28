const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];

export function loadConfig(env = process.env) {
  const logLevel = env.LOG_LEVEL ?? 'info';

  if (!LOG_LEVELS.includes(logLevel)) {
    throw new Error(
      `Invalid LOG_LEVEL "${logLevel}", expected one of: ${LOG_LEVELS.join(', ')}`,
    );
  }

  return Object.freeze({ logLevel });
}
