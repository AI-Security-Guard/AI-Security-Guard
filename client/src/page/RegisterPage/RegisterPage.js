<<<<<<< HEAD
import React, { useState } from 'react';
import * as S from './RegisterPage.style';
import Header from '../../component/Header/Header.js';
import LongButton from '../../component/LongButton/LongButton.js';
import Input from '../../component/Input/Input.js';
import { useNavigate } from 'react-router-dom';
import CustomModal from '../../component/CustomModal/CustomModal.js';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import axios from 'axios';

function RegisterPage() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleRegister = async () => {
        if (!id || !password || !passwordCheck) {
            setModalMessage('모든 항목을 입력해주세요.');
=======
import React, { useState } from "react";
import * as S from "./RegisterPage.style";
import Header from "../../component/Header/Header.js";
import LongButton from "../../component/LongButton/LongButton.js";
import Input from "../../component/Input/Input.js";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../component/CustomModal/CustomModal.js";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";

function RegisterPage() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleRegister = async () => {
        if (!id || !password || !passwordCheck) {
            setModalMessage("모든 항목을 입력해주세요.");
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
            setModalOpen(true);
            return;
        }

        if (password !== passwordCheck) {
<<<<<<< HEAD
            setModalMessage('비밀번호가 일치하지 않습니다.');
=======
            setModalMessage("비밀번호가 일치하지 않습니다.");
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
            setModalOpen(true);
            return;
        }

<<<<<<< HEAD
        // 회원정보 로컬스토리지에 저장하고 약관 페이지로 이동
        localStorage.setItem('username', id);
        localStorage.setItem('password', password);
        localStorage.setItem('passwordCheck', passwordCheck);

        alert('약관 동의 페이지로 이동합니다.');

        // 1초 후 약관동의 페이지로 이동
        setTimeout(() => navigate('/termspage'), 1000);
=======
        try {
            const response = await axios.post("http://127.0.0.1:5000/register", {
                username: id,
                password: password,
                passwordCheck: passwordCheck,
            });

            setModalMessage("회원가입이 완료되었습니다!");
            setModalOpen(true);

            setTimeout(() => navigate("/login"), 1000);

        } catch (error) {
            if (error.response && error.response.data.error) {
                setModalMessage(error.response.data.error);
            } else {
                setModalMessage("서버와의 연결에 실패했습니다.");
            }
            setModalOpen(true);
        }
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
    };

    return (
        <>
            <Header />
            <S.Container>
                <S.RegisterBox>
                    <S.Title>회원가입</S.Title>
                    <Input
                        label="아이디"
                        variant="outlined"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
<<<<<<< HEAD
                        helperText={id.length > 0 && id.length < 4 ? '아이디는 최소 4자 이상이어야 합니다.' : ' '}
=======
                        helperText={id.length > 0 && id.length < 4 ? "아이디는 최소 4자 이상이어야 합니다." : " "}
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                    />
                    <Input
                        label="비밀번호"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
                        helperText={
                            password.length > 0 && password.length < 6 ? '비밀번호는 최소 6자 이상이어야 합니다.' : ' '
                        }
=======
                        helperText={password.length > 0 && password.length < 6 ? "비밀번호는 최소 6자 이상이어야 합니다." : " "}
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                    />
                    <Input
                        label="비밀번호 확인"
                        variant="outlined"
                        type="password"
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
<<<<<<< HEAD
                        helperText={
                            password && passwordCheck && password !== passwordCheck
                                ? '비밀번호가 일치하지 않습니다.'
                                : ' '
                        }
=======
                        helperText={password && passwordCheck && password !== passwordCheck ? "비밀번호가 일치하지 않습니다." : " "}
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
                    />
                    <LongButton txt="가입하기" onClick={handleRegister} />
                </S.RegisterBox>
            </S.Container>

            <CustomModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="회원가입"
                message={modalMessage}
<<<<<<< HEAD
                icon={<ErrorOutlineIcon style={{ fontSize: 60, color: '#6E6E6E' }} />}
                buttons={[{ label: '확인', onClick: () => setModalOpen(false) }]}
=======
                icon={<ErrorOutlineIcon style={{ fontSize: 60, color: "#6E6E6E" }} />}
                buttons={[{ label: "확인", onClick: () => setModalOpen(false) }]}
>>>>>>> c340771cceac8b3c06ccd51490051924e1055b2f
            />
        </>
    );
}

export default RegisterPage;
