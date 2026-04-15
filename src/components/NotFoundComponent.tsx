import Link from 'next/link';


export default function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center w-full">
      <div className="text-[#e47911] font-bold text-6xl md:text-8xl mb-4">404</div>
      <h1 className="text-xl md:text-2xl font-bold text-[#0f1111] mb-2">Looking for something?</h1>
      <p className="text-muted-foreground mb-8 max-w-md text-sm md:text-base">
        We're sorry. The Web address you entered is not a functioning page on our site.
      </p>
      

      <div className="flex flex-col items-center gap-4">
        <Link href="/">
          <span className="text-amazon-blue hover:text-[#c45500] hover:underline cursor-pointer font-medium">
            Go to Home Page
          </span>
        </Link>
        
       
      </div>
    </div>
  );
}
