import styled from "styled-components";
import Form from "../../ui/Form";
import { StyledTitle } from "../../ui/headers";
import Input from "./../../ui/Input";
import FormRow from "../../ui/FormRow";
import Button from "./../../ui/Button";
import { Link } from "react-router-dom";

const StyledLogin = styled.div`
  padding: 0.4rem;
  h1 {
    border-bottom: 1px solid var(--color-grey-100);
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }

  .btns-action {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: var(--color-blue);
    }
    margin-block: 4rem;
  }

  .new-customers {
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-100);
    margin-bottom: 2rem;
    &__wrapper {
      display: flex;
      align-items: center;
      gap: 1.3rem;
      padding: 2rem;
      background-color: var(--color-grey-50);
    }
  }

  .temp-login {
    button {
      margin-bottom: 1rem;
    }
  }
`;
function Login() {
  return (
    <StyledLogin>
      <StyledTitle>Login</StyledTitle>
      <Form>
        <FormRow type={"email"} label={"Email Address or Mobile"}>
          <Input placeholder="Enter Your email or Mobile number" />
        </FormRow>
        <FormRow label={"Please Type The Letters Below"} type={"text"}>
          <Input />
        </FormRow>

        {/* word generator */}

        <div className="btns-action">
          <Button size="large" variation="danger">
            LOGIN
          </Button>
          <Link to={"/auth/signup"}>Froget password</Link>
        </div>

        <div className="new-customers">
          <div className="new-customers__wrapper">
            <p>New Customers?</p>
            <Button
              size="large"
              variation="secondary"
              as={Link}
              to="/auth/signup"
            >
              Create An Account
            </Button>
          </div>
        </div>

        <div className="temp-login">
          <Button
            style={{
              width: "100%",
            }}
            size="large"
            variation="danger"
          >
            LOGIN WITH TEMPORARY CODE
          </Button>

          <p>OTP will be sent to the registered mobile number</p>
        </div>
      </Form>
    </StyledLogin>
  );
}

export default Login;
