import type {InputProps} from '@components/Form/Input';
import type {ImagePickerProps} from '@components/Form/ImagePicker';

export type FormCreateAuctionItem = {
  title: string;
  fields: FormCreateAuctionInput[];
  isPicker?: boolean;
  pickerField?: ImagePickerProps;
};

type FormCreateAuctionInput = InputProps;

export type FormCreateAuctionProps = {
  items: FormCreateAuctionItem[];
  onSubmit: (data: any) => void;
};
