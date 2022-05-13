import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getStreamInfoStart } from '../../src/redux-actions/stream-redux/stream.action';
import { getStreamInfo, getStreamLoadingStatus } from "../../src/redux-actions/stream-redux/stream.selector";
import Error404 from '../404';
import SplashScreen from '../../src/components/splash-screen';


const Redirect = ({ to }) =>{
  const router = useRouter();
  useEffect(() =>{
    router.push(to);
  }, [to]);
  return null;
};

const  ReferalRedirect = () =>{
     const router = useRouter();
     const dispatch = useDispatch();
     const stream = useSelector(getStreamInfo);
     const isStreamLoading = useSelector(getStreamLoadingStatus);
     useEffect(()=>{
      dispatch(getStreamInfoStart(router?.query?.id));
     }, [router.query]);

     if(stream?.refered_product_id){
        return <Redirect  to={`/product/${stream?.refered_product_id}/?oqim=${router?.query?.id}`}/>;
     }else if(!isStreamLoading&&!stream?.refered_product_id){
        return <Error404 />;
     }
     return <SplashScreen/>;
};


export default ReferalRedirect;