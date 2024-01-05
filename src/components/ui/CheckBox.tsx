/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";

interface checkBoxProps {
  textMobile?: string;
  textDesktop?: string;
  text?: string;
  forgotPassword?: string;
  checked?: boolean;
  onChange?: () =>void;
}
export const CheckBox: React.FC<checkBoxProps> = ({
  textMobile,
  textDesktop,
  text,
  forgotPassword,
  checked,
  onChange,
}) => {
  return (
    <div className="font-poppins flex flex-row justify-between items-center">
      <div className="gap-[5px] flex ">
        <label className="flex gap-[5px]" name='rememberMe'>
          <input
            readOnly
            type="checkbox"
            className="form-checkbox text-[20px] text-green-500"
            value="Remember me"
            name="rememberMe"
            checked={checked}
            onChange={onChange}
          />
          <p className="flex">
            <span
              className={`text-[14px] font-Regular block sm:hidden ${text}`}
            >
              {textMobile}
            </span>
            <span
              className={`text-[14px] font-Regular hidden sm:block ${text}`}
            >
              {textDesktop}
            </span>
          </p>
        </label>
      </div>
      <Link
        href="/reset-password"
        className="text-[14px] text-brand-gray-300 font-Regular hover:text-brand"
      >
        {forgotPassword}
      </Link>
    </div>
  );
};


