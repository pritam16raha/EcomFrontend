import { useState } from 'react'
import { FormElement, Input } from '../../styles/form';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import {staticImages} from '../../utils/myImageData'


const PasswordOptions = ({fieldname, name, placeholder,  func, errorMsg = ""}) => {

  const[showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <FormElement>
      <label htmlFor='' className='form-elem-label'>{fieldname}</label>
        <div className="form-elem-block">
          <Input type={showPassword? "text" : "password"}
          placeholder={placeholder}
          name={name}
          className="form-elem-control"
          onChange={func}
          />

          <PasswordToggleButton type='button' className='pwd-value-toggle flex items-center' onClick={togglePassword}>
            {showPassword? (<>
                <span className='pwd-toggle-text text-sm'>Hide</span>
                <img src={staticImages.eyeOn}/>
            </>) 
            :
             (<>
                <span className='pwd-toggle-text text-sm'>Show</span>
                <img src={staticImages.eyeOff}/>
             </>)}
          </PasswordToggleButton>
        </div>
              <span className='form-elem-error text-end font-medium'>{errorMsg}</span>
    </FormElement>
  )
}

export default PasswordOptions;

PasswordOptions.propTypes = {
  fieldname: PropTypes.string,
  name: PropTypes.string,
  errorMsg: PropTypes.string
}

const PasswordToggleButton = styled.button`
    position: absolute;
    bottom: 100%;
    right: 0;
    .pwd-toggle-text{
      padding-left: 5px;
    }
`;