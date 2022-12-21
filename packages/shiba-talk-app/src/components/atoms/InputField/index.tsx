import React from "react";
import classNames from "classnames";
import { FormValidationProps } from "@atoms/FormValidation";

import './index.scss';

export const PREFIX = "shiba-input-field";

/** InputField Props */

export interface InputFieldProps {
  /** Unique ID to associate the label with the InputField */
  id: string;

  /**
   * Text label associated with the InputField (required for a11y).
   * If you use HTML instead of a string, please ensure it includes proper a11y
   * labels/props.
   */
  label: string | React.ReactNode;

  /**
   * Assists the browser with filling out field values.
   * Refer to [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values) for a list of values
   */
  autoComplete?: string;
  /**
   * Automatically give input focus when the page loads
   */
  autoFocus?: boolean;

  /** Initial input value (for uncontrolled components) */
  defaultValue?: string;

  /** Indicates the InputField is not available for interaction */
  disabled?: boolean;

  /** Hide label visually */
  hiddenLabel?: boolean;

  /** When input is type="number" allows setting max value */
  max?: number;

  /** When input is type="number" allows setting min value */
  min?: number;

  /** The name of the InputField, submitted with the form data */
  name?: string;

  /** Callback when InputField loses focus */
  onBlur?(evt?: React.ChangeEvent<HTMLInputElement>): void;

  /** Callback when InputField value changes */
  onChange?(evt?: React.ChangeEvent<HTMLInputElement>): void;

  /** Callback when InputField receives focus */
  onFocus?(evt?: React.FocusEvent<HTMLInputElement>): void;

  /** Callback when InputField receives a keypress event */
  onKeyDown?(evt?: React.KeyboardEvent<HTMLInputElement>): void;

  /**
   * Regular expression that the InputField's value is checked against.
   * Use [html5pattern](http://html5pattern.com/) to create a RegEx
   */
  pattern?: string;

  /** A hint to the user of what can be entered in the control */
  placeholder?: string;

  /** Indicates that a user cannot modify the value of the InputField */
  readOnly?: boolean;

  /** Indicates that a user must fill in a value before submitting */
  required?: boolean;

  /** When input is type="number" allows setting step value for legal number intervals */
  step?: number;

  /** A unique value for `data-test-id` to serve as a hook for automated tests */
  testID?: string;

  /**
   * The type of input control to render. Not all types are supported equally
   * cross-browser
   */
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  /** The `FormValidation` component */
  validation?: React.ReactElement<FormValidationProps> | null;

  /** Controlled InputField value (for controlled components). Requires `onChange` handler */
  value?: string;
}

/** InputField is a control for entering text. */

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  autoFocus,
  autoComplete,
  defaultValue,
  disabled,
  hiddenLabel,
  max,
  min,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  pattern,
  placeholder,
  readOnly,
  required,
  testID,
  type = "text",
  validation,
  value,
  step
}: InputFieldProps) => {
  // Null/undefined checks are necessary to catch all cases.
  // We assume the default prop value is applied when validation
  // is present, but the variant property is undefined.

  const isError =
    ((validation && validation.props.variant === undefined) as boolean) ||
    ((validation && validation.props.variant === "error") as boolean);

  const className = classNames(
    PREFIX,
    isError && `${PREFIX}--error`,
    !isError && validation && `${PREFIX}--${validation.props.variant}`
  );

  const labelClassName = classNames(
    `${PREFIX}__label`,
    hiddenLabel && `shiba-visually-hidden`
  );

  return (
    <div className={className}>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        aria-invalid={isError}
        className={`${PREFIX}__input`}
        data-testid={testID}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        max={max}
        min={min}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        step={step}
        type={type}
        value={value}
      />
      {validation}
    </div>
  );
};

export default InputField;
