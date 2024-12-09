type user = {
  email: string;
  username: string;
  password: string;
  topfour: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
  friends: string[];
};

export { user };
