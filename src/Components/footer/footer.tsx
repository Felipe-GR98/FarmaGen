import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer(){
  const data = new Date().getFullYear()
  return(
    <>
      <div className="flex justify-center bg-indigo-900 text-white ">
        <div className="container flex flex-col items-center py-4">
            <p className=" text-xl font-bold">FarmaGen | Copyrigth: {data} </p>
            <p className="text-lg ">Acesse as Nossas Redes Sociais</p>
            <div className="flex gap-2">
                <LinkedinLogoIcon size={42} weight="bold" />
                <GithubLogoIcon size={42} weight="bold" />
            </div>
        </div>
      </div>
    </>
  )
}
export default Footer