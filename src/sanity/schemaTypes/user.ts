import { SchemaTypeDefinition } from "sanity";


export  const user: SchemaTypeDefinition = {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Full Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule) =>
          Rule.required().regex(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address"
          ),
      },
      {
        name: "phone",
        title: "Phone Number",
        type: "string",
        validation: (Rule) =>
          Rule.required().regex(/^\d{10,15}$/, "Enter a valid phone number"),
      },
      {
        name: "address",
        title: "Address",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "profilePicture",
        title: "Profile Picture",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  