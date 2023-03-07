import connectMongo from '@/database/credentials';
import Users from '@/model/schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: 'Connection failed, try again!' }));

  //only post method is accepted
  if (req.method === 'POST') {
    //if user has no input

    if (!req.body) return res.status(404).json({ message: "Don't have form data " });
    const { username, email, password } = req.body;

    //duplicate user error
    const existinguser = await Users.findOne({ email });
    if (existinguser) return res.status(422).json({ message: 'user already exists!' });

    //hash password
    Users.create({ username, email, password: await hash(password, 12) }, function (err, data) {
      if (err) return res.status(404).json({ err });
      res.status(201).json({ status: true, user: data });
    });
  } else {
    res.status(500).json({ message: 'HTTP method not valid use POST insted' });
  }
}
