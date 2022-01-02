import React from 'react'

const Cart = (props) => {
    const cart=props.cart
    let total=0;
    for (let i=0; i< cart.length; i++){
        const product=cart[i];
        total=Math.round(total+product.price);
      }
      let shipping=0;
      if (total>50){
          shipping=0;
      }
      else if(total == 0) {
          shipping=0;
      }
      else{
          shipping=10;
      }
      let tax=1;
    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <p>Total Price: ${total+shipping+tax}</p>
        </div>
    )
}

export default Cart
