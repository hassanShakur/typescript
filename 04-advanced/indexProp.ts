interface ErrorInterface {
  [prop: string]: string;
}

const emailNameError: ErrorInterface = {
  email: 'Input a valid email',
  name: 'Invalid name input',
};
