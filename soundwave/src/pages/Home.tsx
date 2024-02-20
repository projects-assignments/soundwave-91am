import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export const Home = () => {
  return (
<>
      <div className="w-screen h-screen flex flex-col justify-between  overflow-hidden">
        <div>
          <Navbar />
        </div>
        <div className="relative ">
          <div className=" z-100 relative flex justify-center ">
            <img
              className="h-[600px]"
              src="src\assets\landing-page-girl.png"
              alt="landing-page-girl"
            />
            <div className="ml-28 my-32">
              <h1 className="text-6xl py-2">Feel The Music</h1>
              <p className="text-2xl">
                Stream over 20 thousand songs with one <br />
                click
              </p>
              <Button className="bg-secondary my-6">
                <Dialog>
                  <DialogTrigger>Join Now</DialogTrigger>
                  <DialogContent className="z-[100]">
                    <DialogHeader>
                      <DialogTitle className="text-orange-500">Alert !!</DialogTitle>
                      <DialogDescription className="text-white">
                        Your computer is going to bewiped
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </Button>
            </div>
            <div>
              <div className="h-[450px] w-[450px] z-[-1] left-[100px] bottom-[+100px] absolute rounded-full bg-[#bc3a7f25]"></div>
              <div className="h-[1000px] w-[1000px] z-[-1] left-[1350px] top-[100px] overflow-x-hidden absolute rounded-full bg-[#303047]"></div>
              <div className="h-[450px] w-[450px] z-[-1] left-[550px] bottom-[+300px] absolute rounded-full bg-[#303047]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}