"use client";

const CheckoutForm = () => {
  return (
    <form className="max-w-lg mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold">Billing Details</h2>

      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium mb-2">
          Company Name (Optional)
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Company Name"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Country/Region */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium mb-2">
          Country / Region
        </label>
        <select
          id="country"
          name="country"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        >
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </div>

      {/* Street Address */}
      <div>
        <label
          htmlFor="streetAddress"
          className="block text-sm font-medium mb-2"
        >
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="Street Address"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Town/City */}
      <div>
        <label htmlFor="city" className="block text-sm font-medium mb-2">
          Town / City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Town / City"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Province */}
      <div>
        <label htmlFor="province" className="block text-sm font-medium mb-2">
          Province
        </label>
        <select
          id="province"
          name="province"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        >
          <option value="Western Province">Western Province</option>
          <option value="Central Province">Central Province</option>
          <option value="Southern Province">Southern Province</option>
        </select>
      </div>

      {/* ZIP Code */}
      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
          ZIP Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          placeholder="ZIP Code"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
      </div>

      {/* Additional Information */}
      <div>
        <input
          id="additionalInfo"
          name="additionalInfo"
          placeholder="Additional Information"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        ></input>
      </div>
    </form>
  );
};

export default CheckoutForm;
