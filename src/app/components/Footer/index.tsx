import { FaHeart, FaInstagram } from "react-icons/fa"
import { SocialItems } from "../Socials/Socials"
import { SlSocialLinkedin } from "react-icons/sl"
import { RxDiscordLogo } from "react-icons/rx"
import { FiGithub } from "react-icons/fi"

export const Footer = () =>{
    return(
<footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">

  <div className="text-center">
    <div>
      <a className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">LearnIT</a>
    </div>


    <div className="mt-3">
      <p className="text-gray-500 flex items-center justify-center gap-2">Feito por Mauricio com <a className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-500 dark:hover:text-blue-400" href="#"><FaHeart /></a></p>
      <p className="text-gray-500">© MLSS. 2024 LearnIT. Todos direitos reservados</p>
    </div>


    <div className="flex text-gray-500 mt-4  gap-3 items-center justify-center">
                <SocialItems icone={<FaInstagram />} link="https://www.instagram.com/mauxxll" tool="Insta"></SocialItems>
                         <SocialItems icone={<SlSocialLinkedin />} link="https://www.linkedin.com/in/mauricio-leandro-309759253/" tool="LinkedIn"></SocialItems>
                         <SocialItems icone={<RxDiscordLogo />} link="https://discord.com/users/1060434214622871572" tool="Discord"></SocialItems>
                         <SocialItems icone={<FiGithub />} link="https://www.github.com/MAUXII" tool="Github"></SocialItems>
                </div>

  </div>

</footer>
    )
}