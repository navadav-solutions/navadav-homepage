import { getAssetPath } from '@/app/utils/assets'
import { ReactNode } from 'react'

interface MainBackgroundProps {
  children: ReactNode
}

const MainBackground = ({ children }: MainBackgroundProps) => {
  return (
    <section
    className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
    style={{
      backgroundImage: `url(${getAssetPath("/images/hero/main.png")})`,
    }}
  >
    <div className="w-full lg:w-[80%] mx-auto h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  </section>
  )
}

export default MainBackground