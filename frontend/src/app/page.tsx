import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Contact from "./components/Contact"

export default function Component() {


  const carouselprogram = [
    {img: "/p0.png"},
    {img: "/p1.png"},
    {img: "/p2.png"},
    {img: "/p3.png"},
    {img: "/p4.png"},
    {img: "/p5.png"},

  ]


  const carouselgallery = [
    {img: "/g0.jpg"},
    {img: "/g1.jpg"},
    {img: "/g2.jpg"},
    {img: "/g3.jpg"},
    {img: "/g4.jpg"},
    {img: "/g5.jpg"},
    {img: "/g6.jpg"},
    {img: "/g7.jpg"},
  ]





  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-white text-primary py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Unlock Your College Admission Potential
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Discover our comprehensive services to guide you through the college admission process.
                </p>
                
                <div className="flex gap-7">
                <Link
                  href="/Register"
                  className="inline-flex w-[50%] h-12 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Admission Form
                </Link>
            
                <Link
                  href="/Hostel"
                  className="inline-flex w-[50%] h-12 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Hostel Registration
                </Link>
                </div>

              </div>
              <div>
                <img
                  src="/Hero.svg"
                  alt="College Admission Hero"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>






        <section className="bg-white py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Our Programs</h2>
            <div className="w-full p-8 sm:px-20">
              <Carousel opts={{ align: "start", }} className="w-full">
                <CarouselContent>

                  {carouselprogram.map((data:any, key:any) => {
                    return (
                      <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                        <div>
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <img className="h-full min-h-[300px] w-full object-contain" src={data.img} alt="Programimage" />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>








        <section className="bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Gallery</h2>
            <div className="w-full p-10 sm:px-20">
              <Carousel opts={{ align: "start", }} className="w-full">
                <CarouselContent>

                  {carouselgallery.map((data:any, key:any) => {
                    return (
                      <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex min-h-[300px] items-center justify-center p-6">
                              <img className="h-full w-full object-contain" src={data.img} alt="Programimage" />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>




        <Contact></Contact>



      </main>
    </div>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}