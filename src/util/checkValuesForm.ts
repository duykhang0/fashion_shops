 // check form value
 const isCheckForm = (getValues: any, errors: any) => {
    //check value of form
    const isCheckValueForm = Object.values(getValues()).some(
      (value) => value !== null && value !== undefined && value !== ""
    );
    //check error of form
    const isCheckError = Object.keys(errors).length !== 0;
    const check = isCheckError || isCheckValueForm;
    return check;
  };

  export default isCheckForm;