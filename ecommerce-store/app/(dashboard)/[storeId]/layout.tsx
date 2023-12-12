import prismadb from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const LayoutDashboard = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
}) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>This is a navbar</div>
      {children}
    </>
  );
};

export default LayoutDashboard;
