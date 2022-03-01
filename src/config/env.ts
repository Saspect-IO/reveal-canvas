import development from './env.dev';
import demo from './env.demo';

// ----------------------------------------------------------------------------
// Module Vars
// ----------------------------------------------------------------------------
const env = process.env.NODE_ENV as string;

const config = {
  development,
  demo,
}[env];

export { config };
