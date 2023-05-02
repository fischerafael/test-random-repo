const user = {
  name: "Rafael",
  age: 32,
  email: "rafael@gmail.com",
};

export const NextedIfs = () => {
  const { name, age, email } = user;

  if (!user) return <p>No user data found</p>;

  if (!name) return <p>No name found for this user</p>;

  if (!age) return <p>No age found for this user</p>;

  if (!email) return <p>No email found for this user</p>;

  // another

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};
