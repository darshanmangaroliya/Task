

import bcrypt from "bcrypt"
const data = {
    users: [
        {
          name: 'Darshan',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('1111', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
}
export default data