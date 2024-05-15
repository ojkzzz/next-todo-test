"use server";

const User = ({ params }: { params: { userId: string } }) => {
  console.log(params);
  return <div>User {JSON.stringify(params)}</div>;
};
export default User;
