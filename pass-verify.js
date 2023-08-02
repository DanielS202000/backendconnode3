const bcrypt = require('bcrypt')

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$fQTeJ4zOM0e1RmxezXUe5OKck2CvyD2z6Tac866NGWDvqdTIBS2W6';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
