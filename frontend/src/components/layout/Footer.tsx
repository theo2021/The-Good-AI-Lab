import settings from '@/config/settings'
import { BsGithub, BsLinkedin, BsDiscord, BsTwitterX } from 'react-icons/bs'

const socialIconsMap = {
  x: BsTwitterX,
  github: BsGithub,
  linkedin: BsLinkedin,
  discord: BsDiscord
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
          <p className="text-gray-300">Follow us on social media or drop us a message</p>
        </div>
        <div className="flex justify-center space-x-6">
          {Object.entries(settings.social).map(([platform, data]) => {
            const IconComponent = socialIconsMap[platform as keyof typeof socialIconsMap]
            return IconComponent ? (
              <a
                key={platform}
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <IconComponent size={24} />
              </a>
            ) : null
          })}
        </div>
        <div className="text-center text-gray-400 text-sm mt-4">
          <p>The Good AI Lab</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer