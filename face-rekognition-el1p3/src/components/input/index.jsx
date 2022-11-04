import './style.scss';
import React from 'react';
import { Form, Input, InputNumber, Typography } from 'antd';

const AntInput = (props) => {
    const {label, name, value, onChange} = props;
    const [form] = Form.useForm();
//   const nameValue = Form.useWatch('name', form);
  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name={name} label={label}>
          <Input value={value} onChange={onChange}/>
        </Form.Item>
        {/* <Form.Item name="age" label="Age (Not Watch)">
          <InputNumber />
        </Form.Item> */}
      </Form>

      {/* <Typography>
        <pre>{label} : {nameValue}</pre>
      </Typography> */}
    </>
  );
};

export default AntInput;
