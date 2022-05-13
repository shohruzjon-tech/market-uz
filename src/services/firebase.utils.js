import { db, auth } from './firebase.app';
import { collection, query, where, getDocs, doc, setDoc,getDoc, orderBy, limit } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const getProductsWithTopRating = async () =>{
    const productsRef = collection(db, 'uzstore_products');
    const topRatedProductsList = query(productsRef, where("product_is_top", "==", true));
    const querySnapshot = await getDocs(topRatedProductsList);
    const topRatedProductsListArray = [];
    querySnapshot.forEach((doc) => {
       const data = doc.data();
       topRatedProductsListArray.push(data);
   });
    return topRatedProductsListArray;
};


export const getProductswithNewStatus = async () =>{
    const productsRef = collection(db, 'uzstore_products');
    const newProductsList = query(productsRef, where("product_is_new", "==", true));
    const querySnapshot = await getDocs(newProductsList);
    const newProductsListArray = [];
    querySnapshot.forEach((doc) => {
       const data = doc.data();
       newProductsListArray.push(data);
   });
    return newProductsListArray;
};


export const getDiscountedProductsList = async () =>{
    const productsRef = collection(db, 'uzstore_products');
    const discountedProductsList = query(productsRef, where("product_is_discounted", "==", true));
    const querySnapshot = await getDocs(discountedProductsList);
    const discountedProductsListArray = [];
    querySnapshot.forEach((doc) => {
       const data = doc.data();
       discountedProductsListArray.push(data);
   });
    return discountedProductsListArray;
};

export const getProductsIfstatusIsNew = async () =>{
    const productsRef = collection(db, "uzstore_products");
    const newProductsList = query(productsRef, where("product_is_new", "==", true));
    const querySnapshot = await getDocs(newProductsList);
    const newProductsListArray = [];
    querySnapshot.forEach((doc) => {
       const data = doc.data();
       newProductsListArray.push(data);
   });
    return newProductsListArray;
};

export const getDiscountedProducts = async () =>{
    const productsRef = collection(db, "uzstore_products");
    const discountedProductsList = query(productsRef, where("product_is_discounted", "==", true));
    const querySnapshot = await getDocs(discountedProductsList);
    const discountedProductsListArray = [];
    querySnapshot.forEach((doc) => {
       const data = doc.data();
       discountedProductsListArray.push(data);
   });
    return discountedProductsListArray;
};

export const getProductsWithCategoryId = async (category_id) => {
    const productsRef = collection(db, "uzstore_products");
    const categorizedProductsList = query(productsRef, where("product_category_id", "==", category_id));
    const querySnapshot = await getDocs(categorizedProductsList);
    const categorizedProductsListArray = [];
    querySnapshot.forEach((doc) => {
       const data = doc.data();
       categorizedProductsListArray.push(data);
   });
    return categorizedProductsListArray;
}


export const getProductById = async (product_id) =>{
    const productsRef = collection(db, "uzstore_products");
    const productsList = query(productsRef, where("product_id", "==", parseInt(product_id.payload)));
    const querySnapshot = await getDocs(productsList);
    const productsListArray = [];
    querySnapshot.forEach((doc) => {
       const data = doc.data();
       productsListArray.push(data);
   });
    return productsListArray[0];
}

export const getListOfCategories = async () =>{
    const categorySnapshot = await getDocs(collection(db, "uzstore_products_categories"));
    const productsCategoryList = [];
    categorySnapshot.forEach((doc) => {
       const data = doc.data();
       productsCategoryList.push(data);
   });
    return productsCategoryList;
}

export const getListOfCities = async () =>{
    const citiesSnapshot = await getDocs(collection(db, "uzstore_cities"));
    const citiesCategoryList = [];
    citiesSnapshot.forEach((doc) => {
        const data = doc.data();
        citiesCategoryList.push(data);
   });
    return citiesCategoryList;
}


export const getStreamInfo = async (referalNumber)=>{
    const q = query(collection(db, "uzstore_products_referals"), where("referal_number", "==", parseInt(referalNumber)));     
    const querySnapshot = await getDocs(q);
    const refNumberList = [];
    querySnapshot.forEach((doc) => {
         const data=doc.data();
         refNumberList.push(data);
    });

    return refNumberList[0];
   };



export const setProductOrder = async (data)=>{
    try {
      await setDoc(doc(db, "uzstore_pending_orders", `${data?.order_id}`), data);
    } catch (error) {
        console.log(error);
    }
};



export const createUserProfileDocument=async (userAuth)=>{
    console.log(userAuth.user_id, 'hello id');
    if(!userAuth) return;
    const userRef = doc(db, 'uzstore_users', `${userAuth.user_id}`);
    const userSnapshot = await getDoc(userRef);
    if (!userSnapshot.exists()) {
      const user_created_at=new Date();
      try{
        await setDoc(userRef, {
             ...userAuth,
             user_created_at,
        })
      }catch(error){
             console.log(error);
      }
    }
   return userRef;
};



export const getCurrentUser = ()=>{
    return new Promise((resolve, reject)=>{
        const unsubscribe=onAuthStateChanged(auth, (userAuth)=>{
          unsubscribe();
          resolve(userAuth);
        }, reject)
   })
};

export const getUserDocument = async (uid)=>{
    const docRef = doc(db, "uzstore_users", `${uid}`);
    const docSnap = await getDoc(docRef);
    return {status:docSnap.exists(), data: docSnap.data()};
  };


export const getUserAddresses = async (uid)=>{
    const addressSnapshot = await getDocs(collection(db, `uzstore_users/${uid}/user_adresses`));
    const addressListArray = [];
    addressSnapshot.forEach((doc) => {
       const data = doc.data();
       addressListArray.push(data);
   });
    return addressListArray;
};

export const getUserOrdersList = async (user_id) =>{
    const orderQuery = query(collection(db, "uzstore_pending_orders"), where("client_id", "==", `${user_id}`));
    const querySnapshot = await getDocs(orderQuery);
    const orderList=[];
     querySnapshot.forEach((doc) => {
        const data = doc.data();
        orderList.push(data);
 });
 return orderList;
};

export const getLimitedProductsList = async () =>{
    const limitSnapshot = query(collection(db, "uzstore_products"), orderBy("product_price"), limit(12));
    const getProductsLimit = await getDocs(limitSnapshot);
    const prList = [];
    getProductsLimit.forEach((doc)=>{
        const data = doc.data();
        prList.push(data);
    });
    return prList;
};


export const getListOfTotalProducts = async ()=>{
    const productsSnapshot = await getDocs(collection(db, "uzstore_products"));
    const prodList = [];
    productsSnapshot.forEach((doc) => {
        const data = doc.data();
        prodList.push(data);
   });
    return prodList; 
};