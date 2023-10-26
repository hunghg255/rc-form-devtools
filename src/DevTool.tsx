import React, { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { Antd } from "./icons";
import { injectCss } from "./utils";
import { DevToolPanal } from "./DevToolPanal";
import { FormInstance } from "rc-field-form";

export interface DevToolProps {
  form: FormInstance;
}

export function DevTool(props: DevToolProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    injectCss();
  }, []);

  return (
    <>
      <FloatButton
        onClick={() => setOpen(true)}
        tooltip="RC Form DevTools"
        icon={<Antd />}
        shape="square"
      />
      {open && (
        <DevToolPanal {...props} open={open} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
