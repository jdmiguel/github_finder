import React from 'react';
import { userDataModel } from '../../../utils/models';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';
import CompanyIcon from '@material-ui/icons/Contacts';
import Btn from '../../core/Btn';
import './styles.css';

const UserData =  ({ data }) => {
    const {
        avatar_url, 
        name, 
        bio, 
        email, 
        location, 
        blog, 
        company, 
        html_url
    } = data;

    return (
        <div className='userDataContainer'>
            <img 
                alt="user avatar"
                src={avatar_url}
                className='userAvatar'
            />
            <div className='txtContainer'>
                <h1>{name}</h1>
                <h2>{bio}</h2>
                <div className='subUserInfo'>
                    { email && 
                        <p>
                            <EmailIcon className='userDataIcon'/>
                            <a 
                                href={email} 
                                rel="noopener noreferrer" 
                                mailto={email} 
                                target='_blank'>{email}
                            </a>
                        </p>
                    }
                    { location && 
                        <p>
                            <HomeIcon className='userDataIcon'/> {location}
                        </p>
                    }
                    { blog && 
                        <p>
                            <LinkIcon className='userDataIcon'/>
                            <a 
                                href={blog}
                                rel="noopener noreferrer" 
                                target='_blank'>{blog}
                            </a>
                        </p>
                    }
                    { company && 
                        <p>
                            <CompanyIcon className='userDataIcon'/> {company}
                        </p>
                    }
                </div>
                <Btn onClick={ () => window.open(html_url,'_blank') }
                     type="account_circle"
                     txt="VISIT PROFILE" />
            </div>
        </div>
    )
};

UserData.propTypes = {
    data: userDataModel
};

export default UserData;