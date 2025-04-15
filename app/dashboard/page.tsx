import React from "react";
import { auth } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/sign-in");
  }

  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardHeader className="text-center">
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>
            Welcome {user.name} your are logged In
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <p className="text-sm text-muted-foreground">
            you want to logged out?{" "}
            <form
              action={async () => {
                "use server";
                await auth.api.signOut({
                  headers: await headers(),
                });
                redirect("/sign-in");
              }}
            >
              <Button variant="link" type="submit" className="w-full">
                Sign Out
              </Button>
            </form>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
