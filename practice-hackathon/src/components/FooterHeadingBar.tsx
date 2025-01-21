import React from 'react'
import SocialIconContainers from './SoicalIconContainer'
import colors from './utils/colors'

const FooterHeadingBar = () => {
  return (
    <div className='max-w-[1920px] h-53 flex items-center justify-around font-lato text-[16px] py-[19.2px] mx-auto' style={{
        backgroundColor: colors.pantonePurple,
        color: '#9DA0AE'
    }}>

      <div>
        <span>©Webecy - All Rights Reserved</span>
      </div>

        <div>
            <SocialIconContainers />
        </div>
    </div>
  )
}

export default FooterHeadingBar
