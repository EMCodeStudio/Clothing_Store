
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../Styled/Buttons/SocialButtons'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'
import '../MenuStyle.scss'
const SocialOptions = () => {
    return (
        <>
            <div className="social-container">
                <div className="row-icons">
                    <FacebookIcon>
                        <IconBrandFacebook size={18} />
                    </FacebookIcon>

                    <TwitterIcon>
                        <IconBrandTwitter size={18} />
                    </TwitterIcon>
                    <InstagramIcon>
                        <IconBrandInstagram size={18} />
                    </InstagramIcon>
                    <YoutubeIcon>
                        <IconBrandYoutube size={18} />
                    </YoutubeIcon>
                </div>
            </div>

        </>
    )
}

export default SocialOptions