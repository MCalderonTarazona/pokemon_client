const validation = ({email,password,name,image, hp, attack, defense}) => {
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

    // Image URL
    if (!image) {
      errors.image = 'Image is required';
    } else if (!/([a-z\-_0-9/:.]*\.(jpg|jpeg|png|gif|svg))/i.test(image)) {
      errors.image = 'You must enter a valid image link (jpg, jpeg, png, gif)';
    }

    // HP
    if (Number(hp) === 0) {
      errors.hp = 'Health Points is required';
    }
    // Attack
    if (Number(attack) === 0) {
      errors.attack = 'Attack is required';
    }
    // Defense
    if (Number(defense) === 0) {
      errors.defense = 'Defense is required';
    }
    
    return errors;

}

export default validation;