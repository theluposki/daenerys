import bcrypt from "bcryptjs";

export default () => {
  return {
    generateHashCrypto(password: string): string {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      return hash;
    },
    compareHashCrypto(password: string, hash: string): boolean {
      const compare = bcrypt.compareSync(password, hash); // true
      return compare;
    },
  };
};
