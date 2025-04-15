import { AirVent, ShieldCheck} from 'lucide-react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';



export default async function Navbar() {

    const session = await auth.api.getSession({
          headers: await headers(),
      })

  return (
    <div className='border-b px-4'>
        <div className='flex items-center justify-between mx-auto max-w-4xl h-16'>
            <Link href='/' className='flex items-center gap-2'>
                <ShieldCheck className='h-6 w-6'/>
                <span className='font-bold text-lg'>Next Secure</span>
            </Link>
            <div>
                {
                  session ? (
                    <form action={async () => {
                      'use server'
                      await auth.api.signOut({
                        headers: await headers(),
                      });
                      redirect('/sign-in')
                    }}>
                      <Button type='submit'>Sign Out</Button>
                    </form>
                  ) : (
                    <Link href='/sign-in' className={buttonVariants({ variant: 'ghost' })}>
                      Sign In
                    </Link>
                  )
                }
            </div>
        </div>
    </div>
  );
}
