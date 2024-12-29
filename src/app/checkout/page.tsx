import Features from "../../components/Features";
import Tophead from "../../components/Tophead";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const page = () => {
  return (
    <>
      <Tophead pageName="Checkout" />
      <div className="relative flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-12 mb-12 px-4 sm:px-8">
        <div className="flex-1">
          <CheckoutForm />
        </div>
        <div className="flex-1">
          <OrderSummary />
        </div>
      </div>
      <Features />
    </>
  );
};

export default page;
