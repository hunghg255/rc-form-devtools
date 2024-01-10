<p align="center">
<a href="https://www.npmjs.com/package/rc-form-devtools" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/arcticons:google-webview-devtools.svg?color=%23cefdb4" alt="logo" width='100'/></a>
</p>

<p align="center">
  A powerfull devtools for <a href="https://www.npmjs.com/package/rc-field-form">rc-field-form</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rc-form-devtools" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/rc-form-devtools" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=rc-form-devtools" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/rc-form-devtools" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/rc-form-devtools/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/rc-form-devtools/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/rc-form-devtools" alt="License" /></a>
</p>

## Preview
![](example/screen.png)

## Install

```bash
npm install rc-form-devtools -D
```

## Usage

```diff
import React from 'react';

import Form, { Field, useForm } from 'rc-field-form';
import { DevTool } from 'rc-form-devtools';

const App = () => {
  const [form] = useForm();

  return (
    <>
      <Form form={form} name="userinfo" onFinish={console.log}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <InputNumber min="0" max="100" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
+     <DevTool form={form}/>
    </>
  );
};

export default App;
```
