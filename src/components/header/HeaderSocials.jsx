import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/vikram-bhosale-a14385266/' target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href='https://github.com/VIKRAM9281/' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://github.com/VIKRAM9281/' target="_blank" rel="noreferrer"><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials