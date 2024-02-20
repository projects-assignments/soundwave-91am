import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
export function Gallery() {
  return (
    <main className="grid sm:grid-cols-3 gap-4 w-full max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <img
            alt="Image 1"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height="300"
            src="assets\ariana-img.jpg"
            width="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Sweetener</h2>
          <p className="text-gray-600">Ariana Grande</p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            alt="Image 2"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height="300"
            src="assets\top-img.jpg"
            width="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Trench</h2>
          <p className="text-gray-600">Twenty One Pilots</p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>TOP</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            alt="Image 3"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height="300"
            src="assets\Tycho-Awake.png"
            width="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Awake</h2>
          <p className="text-gray-600">Tycho</p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage alt="@alexdoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <img
            alt="Image 4"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height="300"
            src="assets\lakey-img.jpg"
            width="300"
          />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-bold">Alone</h2>
          <p className="text-gray-600">Lakey Inspired</p>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar>
              <AvatarImage alt="@alexdoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>LI</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}