import { prismaClient } from "@repo/db/client";
import dotenv from "dotenv"

dotenv.config({path:"../../packages/db/.env"});

export default async function Home() {
  try{
    const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
  } catch (e) {
    console.log(e);
  }
}

export const revalidate = 7 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
