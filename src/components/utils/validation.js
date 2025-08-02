export const validation = (email, password) => {
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordregex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  if (emailregex.test(email)) {
    if (passwordregex.test(password)) {
      return true;
    }
  } else {
    return null;
  }
};
