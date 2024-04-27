import AuthInput from "../components/auth-input";
import AuthHeader from "./components/auth-header";
import styled from "styled-components";
import { useState } from "react";

const StyledAuthDiv = styled.div`
  max-width: 30rem;
  padding: 0;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
`;

const StyledControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`;

const StyledActionDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 2rem;

  & .button {
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;
  }

  & .button:hover {
    background-color: #f0920e;
  }

  & .text-button {
    color: #f0b322;
    border: none;
    background-color: transparent;
  }

  & .text-button:hover {
    color: #f0920e;
  }
`;

export default function AuthPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInvalid = submitted && !email.includes("@");
  const passwordInvalid = submitted && password.length < 6;

  function handleLogin() {
    setSubmitted(true);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  
  return (
    <div className="auth-page">
      <AuthHeader />
      <main>
        <section>
          <StyledAuthDiv>
            <StyledControlDiv>
              <AuthInput
                title="Email"
                placeholder="Email"
                onChange={handleEmailChange}
                invalid={emailInvalid}
              />
              <AuthInput
                title="Password"
                placeholder="Password"
                onChange={handlePasswordChange}
                invalid={passwordInvalid}
              />
            </StyledControlDiv>

            <StyledActionDiv>
              <button className="text-button">Create a new account</button>
              <button className="button" onClick={handleLogin}>
                Sign In
              </button>
            </StyledActionDiv>
          </StyledAuthDiv>
        </section>
      </main>
    </div>
  );
}
