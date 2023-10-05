import React, {useEffect, useState} from "react";
import { FlexColumn } from "../../../App.Styled";
import { AiOutlineCamera } from "react-icons/ai";
import { Typography } from "@mui/material";
import { CameraWrapperStyled, ImageStyled, LinkSidebarStyled, ListWrapperStyled, StyledImageWrapper } from "../Profile.Styled";
import avatar from "../../../assets/images/Logos.svg"
// import {getUserById} from "../../../redux/action/userAction";
import {useDispatch, useSelector} from "react-redux";

export default function SideBar() {
    const userData = useSelector(state => state?.UserReducer?.profile?.image);

    console.log(userData)
    const [image, setImage] = useState(null);

    // useEffect(() => {
    //     localStorage.setItem("image", image);
    //
    // }, [image]);

    console.log(image, "image222")

    return (
    <FlexColumn style={{ width:"20%" }}>
        <label>

            <StyledImageWrapper width="82px" height="82px" >
                {image ?
                    <ImageStyled src={image} alt="" width="100%" height="100%" />  :
                    <ImageStyled src={avatar} alt="" width="100%" height="100%" />
                }


                {/*<input type="file" hidden onChange={(e) => {*/}
                {/*    if(e.target.files) {*/}
                {/*        const reader = new FileReader();*/}

                {/*        reader.onload = function () {*/}
                {/*            setImage(reader.result)*/}
                {/*        }*/}

                {/*        reader.onerror = function (e) {*/}
                {/*            console.log(e)*/}
                {/*        }*/}
                {/*        reader.readAsDataURL(e?.target?.files[0]);*/}

                {/*     }*/}


                {/*}} />*/}












                {/*{image ?*/}
                {/*    <ImageStyled src={image} alt="" width="100%" height="100%" />*/}
                {/*    :*/}
                {/*     <ImageStyled src={avatar} alt="" width="100%" height="100%" />*/}
                {/*}*/}

            <CameraWrapperStyled>
                <input type="file" hidden
                       onChange={(e) => {
                           console.log(e.target.files[0], "0000")
                           if (e.target.files) {

                               const reader = new FileReader();

                               console.log(reader, 'reader')
                               reader.onload = function () {
                                   setImage(reader.result);

                               };
                               reader.onerror = function (error) {
                                   console.log("Error: ", error);
                               };
                               reader.readAsDataURL(e.target.files[0]);
                               localStorage.setItem("image", image);
                           }
                       }}

                />
                <AiOutlineCamera style={{ color: "#fff" }} />
            </CameraWrapperStyled>
        </StyledImageWrapper>

        </label>

      <ListWrapperStyled>
        <LinkSidebarStyled
          fontSize="18px"
          fontWeight={500}
          color="#605F5F"
          margin="32px 0 0"
          to={"/profile"}
        >
          Dashboard
        </LinkSidebarStyled>
        <LinkSidebarStyled to="orders">Orders</LinkSidebarStyled>
        <LinkSidebarStyled to="address">Addresses</LinkSidebarStyled>
        <LinkSidebarStyled to="details">Account Details</LinkSidebarStyled>
        <LinkSidebarStyled to="wishlist">Wishlist</LinkSidebarStyled>
        <LinkSidebarStyled to="logout">Logout</LinkSidebarStyled>
      </ListWrapperStyled>
    </FlexColumn>
  );
}
