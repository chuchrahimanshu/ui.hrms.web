interface AuthFormGeneratorPropsInterface {
  data: AuthDataInterface;
}

interface AuthDataInterface {
  title: string;
  description: string;
  formFields: {
    id: string;
    label: string;
    type: string;
    placeholder: string;
  }[];
  rememberMe?: {
    label: string;
    id: string;
  };
  links?: {
    label: string;
    path: string;
  }[];
  skip?: {
    label: string;
    path: string;
  };
  submitButton: {
    label: string;
  };
}
