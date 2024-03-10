import React from 'react';
import './changepassword.css';
import { getSession } from './main';

class ChangePassword extends React.Component
{
    constructor()
    {
        super();
        this.sid = getSession("sid");
        if(this.sid === "")
            window.location.replace("/");
    }

    render()
    {
        return(
            <div className='full-height'>
                <div className='cpcontent'>
                    <h3>Change Your Password</h3>
                    <table>
                    <tr>
                        <td>Current Password* <input type='text' id='T1' className='txtbox' /></td>
                    </tr>
                    <tr>
                        <td>New Password* <input type='text' id='T2' className='txtbox'  /></td>
                    </tr>
                    <tr>
                        <td>Re-type New Password* <input type='text' id='T3' className='txtbox' /></td>
                    </tr>
                    <tr>
                        <td><button>Update</button></td>
                    </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default ChangePassword;