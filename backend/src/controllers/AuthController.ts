import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail({ where: { email } })
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).send({ error: "incorrect-password" });
    }

    return res.header({ token: jwt.sign({ id: user.id, }, process.env.JWT_SECRET as string, { expiresIn: '7d' }) }).send();
  }
}