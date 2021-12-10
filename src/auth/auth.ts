import axios from "axios";

const users = [
  { email: "kim@test.com", password: "123", name: "Kim" },
  { email: "lee@test.com", password: "456", name: "Lee" },
  { email: "park@test.com", password: "789", name: "Park" },
];

type signInProps = {
  email: string;
  password: string;
};

export function signIn({ email, password }: signInProps) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
}

/*export async function signIn({ email, password }: signInProps) {
  const data = await axios.post("http://15.165.121.230:3000/api/users/login", {
    username: email,
    password: password,
  });
  const {
    data: { user },
  } = data;

  console.log("data", user);
  console.log("status", data.status);
  if (data.status === 401) throw new Error();
  if (data.status === 201) {
    alert("로그인 성공");
    return await user;
  }
}*/
