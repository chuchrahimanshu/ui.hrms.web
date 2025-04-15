export const SignUpFormData: AuthDataInterface = {
  title: "Let’s Get You Onboard 🛳️",
  description: "Create your account and start your journey with us.",
  formFields: [
    {
      id: "SIGNUP_COMPANYNAME",
      label: "Company Name",
      type: "text",
      placeholder: "Name of your organization.",
    },
    {
      id: "SIGNUP_EMAIL",
      label: "Email Address",
      type: "email",
      placeholder: "hr@example.com",
    },
    {
      id: "SIGNUP_USERNAME",
      label: "Username",
      type: "text",
      placeholder: "Choose your control panel name.",
    },
    {
      id: "SIGNUP_PASSWORD",
      label: "Password",
      type: "password",
      placeholder: "Keep it secret, keep it safe!",
    },
  ],
  rememberMe: {
    label: "Remember Me",
    id: "SIGNUP_REMEMBERME",
  },
  links: [
    {
      label: "Already a member?",
      path: "/signin",
    },
  ],
  skip: {
    label: "Skip",
    path: "/",
  },
  submitButton: {
    label: "Sign Up",
  },
};

export const SignInFormData: AuthDataInterface = {
  title: "Welcome Back 👋",
  description: "Enter your credentials to step back into your dashboard.",
  formFields: [
    {
      id: "SIGNIN_USERNAME",
      label: "Username",
      type: "text",
      placeholder: "Enter your username.",
    },
    {
      id: "SIGNIN_PASSWORD",
      label: "Password",
      type: "password",
      placeholder: "Enter your password.",
    },
  ],
  rememberMe: {
    label: "Remember Me",
    id: "SIGNIN_REMEMBERME",
  },
  links: [
    {
      label: "New to HRMS?",
      path: "/signup",
    },
  ],
  skip: {
    label: "Skip",
    path: "/",
  },
  submitButton: {
    label: "Sign In",
  },
};

export const ForgetPasswordFormData: AuthDataInterface = {
  title: "Forgot Your Password? 🔑",
  description: "No worries, we’ll help you reset it in a snap.",
  formFields: [
    {
      id: "FORGETPASSWORD_USERNAME",
      label: "Username",
      type: "text",
      placeholder: "Enter your username.",
    },
    {
      id: "FORGETPASSWORD_OTP",
      label: "OTP",
      type: "password",
      placeholder: "Enter 6 digit OTP code.",
    },
    {
      id: "FORGETPASSWORD_PASSWORD",
      label: "Password",
      type: "password",
      placeholder: "Set your new password.",
    },
  ],
  links: [
    {
      label: "TIMER",
      path: "",
    },
    {
      label: "Resend OTP",
      path: "/",
    },
  ],
  submitButton: {
    label: "Verify OTP and Update Password",
  },
};

export const TFAFormData: AuthDataInterface = {
  title: "2FA Checkpoint 🚧",
  description: "Enter your verification code to continue.",
  formFields: [
    {
      id: "TFA_USERNAME",
      label: "Username",
      type: "text",
      placeholder: "Enter your username.",
    },
    {
      id: "TFA_OTP",
      label: "OTP",
      type: "password",
      placeholder: "Enter 6 digit OTP code.",
    },
  ],
  links: [
    {
      label: "TIMER",
      path: "",
    },
    {
      label: "Resend OTP",
      path: "/",
    },
  ],
  submitButton: {
    label: "Verify OTP",
  },
};
