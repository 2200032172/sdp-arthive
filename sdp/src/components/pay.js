import './pay.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';

export default function Pay() {
  const email = localStorage.getItem('email');
  return (
    
    <div className="pay">
        
        <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantID",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log(paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log(paymentData);
          return { transactionState: 'SUCCESS' };
        }}
        existingPaymentMethodRequired={false}
        buttonColor="black"
        buttonType="buy"
      ></GooglePayButton>
    </div>
  );
}


