import Features from "../../components/Features";
import Tophead from "../../components/Tophead";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const page = () => {
  return (
    <>
      <Tophead pageName="Checkout" />
      <div className="checkout-page mt-12 flex justify-center mb-12">
        <CheckoutForm />
        <OrderSummary />
      </div>
      <Features />
    </>
  );
};

export default page;
