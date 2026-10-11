import next from "eslint-config-next";

/* eslint-config-next v16 ships a flat config array, so it is spread directly
   rather than going through FlatCompat. */
const eslintConfig = [
  ...next,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];

export default eslintConfig;
