import { useState } from 'react';
import { FormikHelpers } from 'formik';
import { ADDRESS_CREATE_ENDPOINT } from 'shared/constants';
import { useToast } from 'shared/hooks';
import { AxiosClient } from 'shared/services';
import { transformError, updateLastName } from 'shared/utils';
import { ICreateAddressInitialValue } from 'views/create-new-address/interfaces';
const Buffer = require('buffer/').Buffer;

const password = process.env.REACT_APP_BASIC_AUTH_PASSWORD;

const initialValues: ICreateAddressInitialValue = {
  firstName: '',
  lastName: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  state: '',
  city: '',
  zipcode: '',
  // @ts-expect-error
  recycleDonate: '',
};

interface IUseSubmit {
  initialValues: ICreateAddressInitialValue;
  onSubmit: (
    values: ICreateAddressInitialValue,
    actions: FormikHelpers<ICreateAddressInitialValue>
  ) => Promise<void>;
  handleCloseThanksMessage: () => void;
  isShippingLabelSent: boolean;
}

export const useSubmit = (): IUseSubmit => {
  const toast = useToast();
  const [isShippingLabelSent, setIsShippingLabelSent] = useState(false);

  const onSubmit = async (
    values: ICreateAddressInitialValue,
    actions: FormikHelpers<ICreateAddressInitialValue>
  ) => {
    try {
      const lastName = updateLastName(values.lastName, values.recycleDonate);
      const base64encodedData = Buffer.from(`${password}`).toString('base64');
      const result = await AxiosClient.post<{ message: string }>(
        ADDRESS_CREATE_ENDPOINT,
        {
          ...values,
          lastName,
        },
        {
          headers: {
            Authorization: `Basic ${base64encodedData}`,
          },
        }
      );
      if (result.status === 201) {
        setIsShippingLabelSent(true);
        actions.resetForm({
          values: initialValues,
        });
      }
    } catch (err) {
      actions.setSubmitting(false);
      toast.error(transformError(err).message);
    }
  };

  const handleCloseThanksMessage = () => {
    setIsShippingLabelSent(false);
  };

  return {
    initialValues,
    onSubmit,
    isShippingLabelSent,
    handleCloseThanksMessage,
  };
};
