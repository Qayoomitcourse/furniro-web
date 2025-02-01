// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { client } from "@/sanity/lib/client";

// const UserProfile = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     profilePicture: "",
//   });

//   const router = useRouter();

//   // Fetch user data from Sanity
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const query = `*[_type == "user" && email == $email][0]`;
//         const params = { email: "user@example.com" }; // Replace with dynamic user email
//         const data = await client.fetch(query, params);
//         if (data) setUserData(data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Handle form submission
//   const handleUpdateProfile = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const mutation = {
//         _type: "user",
//         _id: userData.email, // Use email as unique identifier
//         ...userData,
//       };

//       await client.createOrReplace(mutation);
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow-md rounded-md">
//       <h1 className="text-2xl font-bold text-center">Your Profile</h1>

//       <form onSubmit={handleUpdateProfile} className="space-y-4">
//         <div>
//           <label className="block font-medium">Full Name</label>
//           <input
//             type="text"
//             value={userData.name}
//             onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Email</label>
//           <input
//             type="email"
//             value={userData.email}
//             onChange={(e) =>
//               setUserData({ ...userData, email: e.target.value })
//             }
//             className="w-full p-2 border rounded-md"
//             required
//             disabled // Email should be immutable for existing users
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Phone Number</label>
//           <input
//             type="text"
//             value={userData.phone}
//             onChange={(e) =>
//               setUserData({ ...userData, phone: e.target.value })
//             }
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Address</label>
//           <textarea
//             value={userData.address}
//             onChange={(e) =>
//               setUserData({ ...userData, address: e.target.value })
//             }
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Profile Picture</label>
//           <input
//             type="file"
//             onChange={(e) => {
//               if (e.target.files && e.target.files[0]) {
//                 const file = e.target.files[0];
//                 setUserData({ ...userData, profilePicture: URL.createObjectURL(file) });
//                 // Upload to Sanity using client.assets.upload
//               }
//             }}
//             className="w-full"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-primary text-white rounded-md"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserProfile;
