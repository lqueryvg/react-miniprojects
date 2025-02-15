import { currentUser } from "@clerk/nextjs/server";

export async function AuthStatus() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  console.log({ user });

  return (
    <div>
      <p>Hello {user?.firstName}</p>
      <p>Congratulations, you are authenticated.</p>
    </div>
  );
}
