import db from "../database/mongoDB";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userMail = await db.collection("users").findOne({ email });
    if (userMail) {
      return res.status(409).send("E-mail já cadastrado");
    }

    const hash = bcrypt.hashSync(password, 10);

    await db.collection("users").insertOne({ name, email, password: hash });

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(404).send("Usuário Não cadastrado");
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = uuid();
      await db.collection("sessions").insertOne({ userId: user._id, token });
      return res.status(200).send({ name: user.name, token });
    }

    res.status(401).send("Senha Incorreta");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const signOut = async (req, res) => {
  const userId = res.locals.userId;

  try {
    await db.collection("sessions").deleteOne({ userId });

    res.status(200).send("Usuário deslogado com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { signIn, signUp, signOut };
