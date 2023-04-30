const validation = ({email,password,name}) => {
    let errors = {};
  
    // Email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    } else if (email.length > 35) {
      errors.email = 'Email must be 35 characters or less';
    }

    // Password
    if (!password) {
        errors.password = 'Password is required';
      } else if (password.length < 6 || password.length > 10) {
        errors.password = 'Password has to have 6 to 10 characters';
      } else if (!/\d/.test(password)) {
        errors.password = 'Password must have at least one number';
      }
    
    // Name
    if (!name) {
      errors.name = 'Name is required';
    } else if (name.length < 2 || name.length > 20) {
      errors.name = 'Name has to have 2 to 20 characters';
    }
    
    return errors;

}

export default validation;