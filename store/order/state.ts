export enum OrderStatus {
  Created,
  Ready,
  Sent,
  Delivered,
  Canceled,
  Draft
}

export enum PaymentStatus {
  NewPayment,
  TokenRequested,
  Failed,
  Started,
  Paid
}

export enum PaymentMethod {
  Online,
  CashOnDelivery,
  Transfer
}

export enum DeliveryMethod {
  InPostCourier,
  InPostParcelLocker
}

export type OrderContainer = {
  token: string
  billing: {
    isCompany: boolean
    name: string
    companyName: string
    phone: string
    email: string
    address: string
    zip: string
    city: string
    country: string
    taxId: string
  }
  delivery: {
    name: string
    phone: string
    email: string
    address: string
    zip: string
    city: string
    country: string
    method: DeliveryMethod
    date: string
    additionalData: any
  }
  payment: {
    method: PaymentMethod
    status: PaymentStatus
    paymentDetails: {
      token: string
      amount: number
      currency: string
    }
  }
  cost: {
    shippingCosts: number
    additional: number
    productPrice: number
  }
  discount: {
    beforeDiscount: number
    discountValue: number
  }
  totalPrice: number
  additionalInfo: string
  serverTime: string
  clientTime: string
  orderId: string
  status: OrderStatus
}

export type OrderState = {
  order: OrderContainer
}

export default () => (<OrderState>{})
