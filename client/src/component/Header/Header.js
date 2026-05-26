<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
import {
    HeaderContainer,
    Logo,
    LogoImg,
    LogoTxt,
    UserAuthBox,
    LoginButton,
    RegisterButton,
    WelcomeMessage,
    Logout,
<<<<<<< HEAD
} from './Header.style.js';
import { useNavigate } from 'react-router-dom';

function Header({ compact = false }) {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [id, setId] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('access_token');

        if (user && token) {
            setIsLogin(true);
            setId(user.username);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        setIsLogin(false);
        setId('');
        navigate('/login', { replace: true });
    };

    return (
        <HeaderContainer>
            <Logo onClick={() => navigate('/')}>
                <LogoImg src="/image/logo.png" alt="로고 이미지" />
                <LogoTxt>AI방범대</LogoTxt>
            </Logo>
            <UserAuthBox>
                {isLogin ? (
                    <>
                        <WelcomeMessage>{id}님 환영합니다!</WelcomeMessage>
                        <Logout onClick={handleLogout}>로그아웃</Logout>
                    </>
                ) : (
                    <>
                        <LoginButton onClick={() => navigate('/login')}>로그인</LoginButton>
                        <RegisterButton onClick={() => navigate('/register')}>회원가입</RegisterButton>
                    </>
                )}
            </UserAuthBox>
        </HeaderContainer>
=======
} from "./Header.style.js";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [id, setId] = useState("sojeong0302");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setId(user.username);
            setIsLogin(true);
        }
    }, []);

    return (
        <>
            <HeaderContainer>
                <Logo onClick={() => navigate("/")}>
                    <LogoImg src="/image/logo.png" alt="로고 이미지" />
                    <LogoTxt>AI방범대</LogoTxt>
                </Logo>
                <UserAuthBox>
                    {isLogin ? (
                        <>
                            <WelcomeMessage>{id}님 환영합니다!</WelcomeMessage>
                            <Logout onClick={() => {
                                localStorage.removeItem("user");
                                setIsLogin(false);
                                navigate("/login");
                            }}>
                                로그아웃
                            </Logout>
                        </>
                    ) : (
                        <>
                            <LoginButton onClick={() => navigate("/login")}>로그인</LoginButton>
                            <RegisterButton onClick={() => navigate("/register")}>회원가입</RegisterButton>
                        </>
                    )}
                </UserAuthBox>
            </HeaderContainer>
        </>
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
    );
}

export default Header;
