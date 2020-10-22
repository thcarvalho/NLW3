import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import hashPassword from '../utils/hashPassword';
import UserView from '../views/user.view';

const UserController = {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
    } = req.body;

    const usersRepository = getRepository(User);

    const data = {
      name,
      email,
      password: await hashPassword(password),
    }

    const user = usersRepository.create(data);

    await usersRepository.save(user);

    return res.status(201).json(UserView.render(user));
  },
  async index(req: Request, res: Response) {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    return res.json(UserView.renderMany(users));
  },
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail(id);

    return res.json(UserView.render(user));
  }
}

export default UserController