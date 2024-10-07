import app from './config/app.config';
import ENVIRONMENT from './config/env.config';

app.listen(ENVIRONMENT.port, () => {
  console.log(`Server is running on port ${ENVIRONMENT.port}`);
});
