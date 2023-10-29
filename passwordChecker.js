const passwordChecker = (password) => {
  let rgex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if(rgex.test(password)){
      return true
  }
  return false
}
