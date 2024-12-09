import axios from "axios";
import * as endpoints from "./endpoints";

export async function createUser(
  email: string,
  username: string,
  password: string,
): Promise<string> {
  const response = await axios
    .post(endpoints.newUser, {
      email: email,
      username: username,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });

  return response;
}
