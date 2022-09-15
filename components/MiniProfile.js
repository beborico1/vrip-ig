import {signOut,useSession} from "next-auth/react"

function MiniProfile() {
  const {data: session} = useSession()

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img 
        className="rounded-full border p-[2px] w-16 h-16" 
        src={session?.user?.image} 
        alt=""/>
        
        <div className="flex-1 mx-4">
            <h2 className="font-bold">{session?.user?.username}</h2>
            <h1 className="text-sm text-gray-400">Bienvenido a Vrip</h1>
        </div>

        <button onClick={signOut} className="text-lime-500 text-sm font-semibold">Cerrar Sesión</button>
    </div>
  )
}

export default MiniProfile
