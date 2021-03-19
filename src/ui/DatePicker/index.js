import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {formatedToDate, dateToFormated} from './rules';

const MODE = 'date';

const DatePicker = ({date, onChange}) => {
  const [show, setShow] = useState(false);

  const open = () => setShow(true);
  const close = () => setShow(false);

  const onConfirm = value => {
    onChange(dateToFormated(value));

    return close();
  };

  DatePicker.open = open;

  const datePicker = date ? formatedToDate(date) : new Date();

  return (
    <DateTimePickerModal
      isVisible={show}
      date={datePicker}
      mode={MODE}
      onConfirm={onConfirm}
      onCancel={close}
      cancelTextIOS={'Cancelar'}
      confirmTextIOS={'Confirmar'}
      is24Hour
      neverDisableConfirmIOS
    />
  );
};

export default DatePicker;
