import React from "react"

//library
import classNames from "classnames"

// style
import "./index.scss"

export const PREFIX = "shiba-input"

/** Input props */

export interface InputProps {
  /** Unique ID to associate the label with the TextInput */
  id: string

  /**
   * Assists the browser with filling out field values.
   * Refer to [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values) for a list of values
   */
  autoComplete?: string

  /**
   * Automatically give input focus when the page loads
   */
  autoFocus?: boolean

  /** Initial input value (for uncontrolled components) */
  defaultValue?: string

  /** Indicates the TextInput is not available for interaction */
  disabled?: boolean

  /** Hide label visually */
  hiddenLabel?: boolean

  /** When input is type="number" allows setting max value */
  max?: number

  /** When input is type="number" allows setting min value */
  min?: number

  /** The name of the TextInput, submitted with the form data */
  name?: string

  /** Callback when TextInput loses focus */
  onBlur?(evt?: React.ChangeEvent<HTMLInputElement>): void

  /** Callback when TextInput value changes */
  onChange?(evt?: React.ChangeEvent<HTMLInputElement>): void

  /** Callback when TextInput receives focus */
  onFocus?(evt?: React.FocusEvent<HTMLInputElement>): void

  /** Callback when TextInput receives a keypress event */
  onKeyDown?(evt?: React.KeyboardEvent<HTMLInputElement>): void

  /**
   * Regular expression that the TextInput's value is checked against.
   * Use [html5pattern](http://html5pattern.com/) to create a RegEx
   */
  pattern?: string

  /** A hint to the user of what can be entered in the control */
  placeholder?: string

  /** Indicates that a user cannot modify the value of the TextInput */
  readOnly?: boolean

  /** Indicates that a user must fill in a value before submitting */
  required?: boolean

  /** When input is type="number" allows setting step value for legal number intervals */
  step?: number

  /**
   * The role attribute can provide semantics.
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
   */
  role?: string

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
    | "week"
    | "search"

  ariaExpanded?: boolean

  ariaLabel?: string

  spellCheck?: boolean

  /** Controlled TextInput value (for controlled components). Requires `onChange` handler */
  value?: string
}

const Input: React.FC<InputProps> = ({
  id,
  autoFocus,
  autoComplete,
  defaultValue,
  disabled,
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
  step,
  type,
  ariaExpanded = false,
  ariaLabel,
  spellCheck = false,
  value,
  role
}) => {
  const className = classNames(PREFIX)

  return (
    <input
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      className={className}
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
      role={role}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      spellCheck={spellCheck}
    />
  )
}

export default Input
