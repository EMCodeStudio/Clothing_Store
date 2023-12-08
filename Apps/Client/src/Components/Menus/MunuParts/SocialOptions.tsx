
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../Styled/Buttons/SocialButtons'
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled, IconBrandYoutubeFilled } from '@tabler/icons-react'
import '../MenuStyle.scss'


const SocialOptions = () => {

    const socialBaseClass = 'social-container'

    return (
        <>
            <div className={socialBaseClass}>
                <div className={`${socialBaseClass}__row-icons`}>
                    <FacebookIcon className="facebook-icon">
                        <IconBrandFacebookFilled
                            size={16}
                            className='facebook'
                        />
                    </FacebookIcon >
                    <TwitterIcon className="twitter-icon">
                        <IconBrandTwitterFilled
                         size={16}
                         className='twitter'
                         />
                    </TwitterIcon>
                    <InstagramIcon className="instagram-icon">
                        <IconBrandInstagram
                         size={16}
                         className='instagram'
                          />
                    </InstagramIcon >
                    <YoutubeIcon
                        className="youtube-icon"
                     /*  style={{border: '1px solid red', backgroundColor: 'orange'}} */>
                        <IconBrandYoutubeFilled
                        className='youtube'
                         size={16} 
                         />
                    </YoutubeIcon>
                </div>
            </div>

        </>
    )
}

export default SocialOptions