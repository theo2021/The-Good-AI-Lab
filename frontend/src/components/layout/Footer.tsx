import settings from '@/config/settings'
import { BsLinkedin, BsDiscord } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'

interface SocialData {
  url: string;
  hoverColor: string;
}

interface Settings {
  social: {
    [key: string]: SocialData;
  }
}

const socialIconsMap = {
  x: FaXTwitter,
  linkedin: BsLinkedin,
  discord: BsDiscord
}

const socialHoverClasses = {
  discord: 'hover:text-indigo-400',
  x: 'hover:text-gray-400',
  linkedin: 'hover:text-blue-400'
} as const

const typedSettings = settings as Settings;

const Footer = () => {
  const { discord, ...otherSocials } = typedSettings.social;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center">
          <a
            href={discord.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${socialHoverClasses.discord} transition-colors flex flex-col items-center`}
          >
            <BsDiscord size={48} />
          </a>
            <p className="mt-2 text-lg font-semibold">Join our Discord server!</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-center space-x-6">
            {Object.entries(otherSocials).map(([platform, data]) => {
              const IconComponent = socialIconsMap[platform as keyof typeof socialIconsMap]
              return IconComponent ? (
                <a
                  key={platform}
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialHoverClasses[platform as keyof typeof socialHoverClasses]} transition-colors`}
                >
                  <IconComponent size={24} />
                </a>
              ) : null
            })}
          </div>
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