import { SchemaTypeDefinition } from "sanity"

export const UserRegistration: SchemaTypeDefinition = {
    name: "userReg",
    title: "UserReg",
    type: "document",
    fields: [
      { name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required() },
      { name: "password", title: "Password", type: "string", hidden: true }, // Store hashed passwords
      { name: "name", title: "Name", type: "string" },
      { name: "role", title: "Role", type: "string", options: { list: ["user", "admin"] } },
    ],
  };
  