const functions = require('firebase-functions');
const { default: next } = require('next');
const admin = require("firebase-admin");
admin.initializeApp();

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDev,
  //location of .next generated after running -> yarn build
  conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();


exports.nextServer = functions.https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});


// exports.balanceController = functions.auth.user().onCreate((user) => {
//     admin.firestore().collection('marketing_partners_balance').doc(user.uid).set({
//       balance_id: user.uid,
//       balance_amount: 0,
//       balance_owner_contact: user.phoneNumber,
//     });

//     admin.firestore().collection('marketing_partners_orders').doc(user.uid).set({
//       status_code_1:0,
//       status_code_2:0,
//       status_code_3:0,
//       status_code_4:0,
//       status_code_5:0,
//       status_code_6:0,
//       status_code_7:0,
//       status_code_8:0,
//       status_code_9:0,
//     })

//     return 'Function has been completed successfully'
// });


// exports.orderController = functions.firestore.document('uzstore_pending_orders/{documentId}').onCreate((snap, context) => {
//   const newValue = snap.data();
//   const referNumber = newValue.order_referal_number;
//   if(referNumber){
//     const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);

//     docRef.get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         const  referal = doc.data();
//           admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//             status_code_1: admin.firestore.FieldValue.increment(newValue?.order_quantity)
//           }, { merge: true })
//       });
//     })
//   .catch((error) => {
//       console.log("Error getting documents: ", error);
//   });
//   }

//   return 'A function has done its job'
// });


// exports.updateOrders = functions.firestore.document('uzstore_approved_orders/{documentId}').onWrite((change, context) => {
//       // Get an object representing the document
//       // e.g. {'name': 'Marie', 'age': 66}
//       const newValue = change.after.data();

//       const previousValue = change.before.data();

//       // access a particular field as you would any JS property
//       const status_code = newValue.status_id;
//       const referNumber = newValue.order_referal_number;
//       const order_quantity= newValue.order_quantity;
      
//       if(referNumber && status_code===2){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);

//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_2: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//       }else if(referNumber && status_code===3){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);

//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_3: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//       }
//       else if(referNumber && status_code===4){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);
//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_4: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//       }
//       else if(referNumber && status_code===5){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);
//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_5: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
        
//       }
//       else if(referNumber && status_code===6){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);
//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_6: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
        
//       }
//       else if(referNumber && status_code===7){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);
//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_7: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
        
//       }
//       else if(referNumber && status_code===8){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);
//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_8: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
        
//       }
//       else if(referNumber && status_code===9){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);
//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_9: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
        
//       }
//       else if(referNumber && status_code===10){
//         const  docRef = admin.firestore().collection("uzstore_products_referals").where("referal_number", "==", referNumber);
//         if(previousValue&&previousValue.status_id===10){
//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(-previousValue.order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }

//           docRef.get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//               const  referal = doc.data();
//                 admin.firestore().collection('marketing_partners_orders').doc(referal?.referal_owner_id).set({
//                   status_code_10: admin.firestore.FieldValue.increment(order_quantity)
//                 }, { merge: true })
//             });
//           })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//         }

//       return 'function completed';
      
// });



exports.emailVerification = functions.auth.user().onCreate((user, ctx)=>{
  console.log(user, ctx);
  const sd = admin.auth();
  console.log('HERE IS ADMIN AUTH', sd);
  const settings={uri: `https://flutterautomi2022.web.app/?email=${user.email}`,   handleCodeInApp: true,}
  admin.auth().sendSignInLinkToEmail(user.email, settings)
  .then((result) => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
  console.log(result);      // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
});