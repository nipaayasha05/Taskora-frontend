import PaymentsSuccess from "@/components/payments/PaymentsSuccess";
import React from "react";

type Props = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

const PaymentSuccessPage = ({ searchParams }: Props) => {
  return (
    <div>
      <PaymentsSuccess />
    </div>
  );
};

export default PaymentSuccessPage;
