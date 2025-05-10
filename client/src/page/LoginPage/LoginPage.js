import React, { useState } from 'react';
import * as S from './LoginPage.style';
import Header from '../../component/Header/Header.js'
function LoginPage() {
  const [id,setId]=useState('');
  const [password,setPassword]=useState('');

  const handleLogin=()=>{
    if(!id||!password){
      alert('아이디와 비밀번호 모두 입력해주세요.');
      return;
    }

    console.log('로그인 시도:',{id,password});
  };
  return (
    <>
      <Header />
      <S.Container>
        <S.LoginBox>
          <S.Title>Login</S.Title>

          <S.Label>ID</S.Label>
          <S.Input 
          type="id" 
          placeholder=""
          value={id}
          onChange={(e)=>setId(e.target.value)}
          />

          <S.Label>Password</S.Label>
          <S.Input 
          type="password" 
          placeholder=""
          value={password}
          onChange={(e)=>setPassword(e.target.value)} 
          />

          <S.Button onClick={handleLogin}>SIGN IN</S.Button>

          <S.LinkWrapper>
            <a href="/find-password">비밀번호 찾기</a> | <a href="/find-id">아이디 찾기</a>
          </S.LinkWrapper>
        </S.LoginBox>
      </S.Container>
    </>
  );
}

export default LoginPage;
